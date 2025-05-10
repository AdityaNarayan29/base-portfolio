"use client";

import { useEffect } from "react";

export function AutoChatScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://automatic.chat/embed.js";
    script.id = "cmai4cath007cnv4e08lgvgim";
    script.setAttribute("open", "true");
    script.setAttribute("openDelay", "5000");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

