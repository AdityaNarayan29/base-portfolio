// Backend for the "ask my AI" terminal on the homepage.
// Needs ANTHROPIC_API_KEY in Vercel (Settings > Environment Variables).
// The prompt and facts are read from public/home.html, so there is one source of truth.

const MODEL = process.env.ASK_MODEL || "claude-haiku-5-5";
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();
let system: string | null = null;

type Msg = { role: "user" | "assistant"; content: string };

async function getSystem(origin: string) {
  if (system) return system;
  const html = await (await fetch(new URL("/home.html", origin))).text();
  const kb = html.match(/const KB = `([\s\S]*?)`;/)?.[1] ?? "";
  const rules = html.match(/const SYS = `([\s\S]*?)\\n\\n\$\{KB\}`;/)?.[1] ?? "";
  if (!kb || !rules) throw new Error("prompt not found");
  system = rules + "\n\n" + kb;
  return system;
}

export async function POST(req: Request) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return Response.json({ error: "not_configured" }, { status: 503 });

  const ip = (req.headers.get("x-forwarded-for") || "anon").split(",")[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return Response.json({ error: "rate_limited" }, { status: 429 });
  recent.push(now);
  hits.set(ip, recent);

  let body: { messages?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }
  const messages = (body.messages || [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-9)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 1200) }));
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: MODEL, max_tokens: 300, system: await getSystem(req.url), messages }),
    });
    if (!res.ok) return Response.json({ error: "upstream" }, { status: 502 });
    const data = await res.json();
    const text = (data.content || [])
      .filter((b: { type: string }) => b.type === "text")
      .map((b: { text: string }) => b.text)
      .join("")
      .trim();
    return Response.json({ text });
  } catch {
    return Response.json({ error: "upstream" }, { status: 502 });
  }
}
