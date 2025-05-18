import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Narayan",
  initials: "AN",
  url: "https://adityanarayan.co.in/",
  location: "Dubai, UAE",
  locationLink: "https://www.google.com/maps/place/dubai",
  description:
    "Software Engineer. I love building things and helping people. Easily available on Linkedin & X.",
  summary:
    "A focused software engineer based in [Dubai](https://maps.app.goo.gl/fxU4gkJWLwGz3AScA) passionate about building intuitive digital [experiences](). With expertise in React, Node.js & Javascript (TS), I’ve contributed to impactful projects at TCS Digital, Trasna (Workz), Datoms and a few other companies. [Fancier Portfolio](https://aditya29.netlify.app/) Beyond coding, I explore problem solving over [Leetcode](https://leetcode.com/u/AdityaNarayan29/), trading strategies, and connecting technology with human experiences. Let’s build something awesome together!",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "AWS",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adityanarayan29j@gmail.com",
    tel: "+971557742586",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/aditya29-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/aditya29-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/aditya29-twitter",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "adityanarayan29j@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Trasna",
      href: "https://www.trasna.io/",
      badges: [],
      location: "Dubai, UAE",
      title: "Software Engineer",
      logoUrl: "/trasna.jpg",
      start: "Jun 2023",
      end: "Present",
      description:
        "Led the full development lifecycle, implementing a React JS frontend with automation and E2E testing. Engineered advanced profile management (localization, tagging, campaign creation) for 1.2B+ SIM/eSIM devices. Optimized app efficiency by 32% via multi-tenancy, lazy loading, debouncing, and architecture streamlining. Built backend APIs with Python Flask, managed PostgreSQL, and utilized Docker for deployment consistency. Delivered reusable components using MUI, Figma, Cypress, and Jira.",
    },
    {
      company: "Tata Consultancy Services",
      badges: [],
      href: "https://tcs.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/tcs.jpeg",
      start: "Jun 2022",
      end: "Jul 2023",
      description:
        "As a White hat hacker at Tata Consultancy Services, I contributed to improving web application security by identifying and mitigating vulnerabilities using tools like OWASP Top 10, ZAP, and BurpSuite. I documented findings and collaborated with the development team for remediation. My performance and dedication led to a full-time job offer, solidifying my passion for cybersecurity.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/upwork.webp",
      start: "Dec 2021",
      end: "Jun 2022",
      description:
        "As a freelance software developer, I built dynamic, responsive websites using React, Bootstrap, Material UI, Node.js, and Express. I handled end-to-end development, from architecture design to delivery, collaborating with diverse clients to create user-friendly solutions. This experience enhanced my expertise in web technologies and established me as a reliable professional.",
    },
    {
      company: "Datoms",
      href: "https://datoms.io/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/datoms.jpg",
      start: "Feb 2021",
      end: "Jun 2021",
      description:
        "During my software developer internship at Datoms, I led a team of three to develop a smart street lighting system. I designed and implemented the front-end using React and AntDesign, built the back-end with Node.js and Express, and created a dashboard for system management.",
    },
    {
      company: "The Next",
      href: "https://www.linkedin.com/company/the-nextt/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/next.jpeg",
      start: "Sep 2020",
      end: "Nov 2020",
      description:
        "During my internship at The Next, an ed-tech startup, I developed SPA, optimized code for performance, designed scalable architectures, and ensured timely delivery. This experience honed my web development skills and deepened my passion for software development.",
    },
    {
      company: "Sanscript Technologies",
      href: "https://www.linkedin.com/company/swbc-tech",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/sanscript.jpeg",
      start: "Jun 2020",
      end: "Aug 2020",
      description:
        "During my Sanscript(SWBC) internship, I led a team to develop an ed-tech product, creating a robust front-end with HTML, CSS, Bootstrap, and Vanilla JS, and a back-end with Node.js and Express. This experience strengthened my leadership and web development skills.",
    },
  ],
  education: [
    {
      school: "Silicon Institute of Technology",
      href: "https://silicon.ac.in/",
      degree: "Bachelor's of Technology Computer Science (B.Tech)",
      logoUrl: "/college.jpg",
      start: "2019",
      end: "2023",
    },
    {
      school: "Allen Career Institute",
      href: "https://www.allen.ac.in/",
      degree: "Higher Secondary School",  
      logoUrl: "/allen.jpg",
      start: "2016",
      end: "2018",
    },
    {
      school: "Guru Gobind Singh Public School",
      href: "https://www.ggpsbokaro.com/",
      degree: "Secondary School",
      logoUrl: "/ggps.png",
      start: "2004",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Mast UI",
      href: "https://mast-ui.vercel.app/",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Mast UI is a beautifully designed component library built on top of TailwindCSS and Shadcn UI. It provides a collection of accessible, customizable, and production-ready UI components for modern web applications. Inspired by Vercel and Linear aesthetics, Mast UI focuses on clean design, developer experience, and flexibility.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Radix UI",
        "Vite",
        "Framer Motion",
        "Lucide Icons",
      ],
      links: [
        {
          type: "Website",
          href: "https://mast-ui.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/AdityaNarayan29/mast-ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "EventSpheres",
      href: "https://eventsphere.app", // Replace with actual link
      dates: "Dec 2024 - Present", // Adjust as needed
      active: true,
      description:
        "EventSphere is a full-featured event management platform that allows organizers to create, manage, and promote events while enabling attendees to register, RSVP, and receive real-time updates. It supports features like ticketing, calendar sync, reminder notifications, and dashboard analytics.",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "PostgreSQL",
        "Prisma",
        "Node.js",
        "Stripe",
        "Vercel",
        "Docker",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://eventsphere.app", // Replace if different
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/AdityaNarayan29/event-planner-monorepo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },

  ],
  hackathons: [
    {
      title: "TCS Codevita 10",
      dates: "May 2022",
      location: "Remote - International",
      description: "State rank holder with a global rank of 688 among 350K+ participants with a 99.99 percentile in a competitive coding contest",
      image:"/tcs.jpeg",
      win: "Rank holder | 99.81 percentile",
      links: [],
    },
    {
      title: "Datoms Ideathon",
      dates: "Jan 2021",
      location: "Remote - International",
      description: "Ideated and developed a smart street lighting system software for disaster management",
      image:"/datoms.jpg",
      win: "Top 3 Finalist",
      links: [],
    },
    {
      title: "Supreme Hack 24",
      dates: "May 2020",
      location: "Remote - National",
      description: "Developed neural network to optimize a trait reporting process for CORONA virus",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
        win: "Top 5 Finalist | Honourable Mention",
      links: [],
    },
  ],
} as const;
