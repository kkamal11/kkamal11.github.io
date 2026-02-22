import { type AssistantOptionType } from "./types";

export const INTRO_MESSAGES: Record<string, string> = {
  "/": "👋 Hey there! I am here to assist you navigate.",
  "/projects": "🚀 Need help choosing a project to explore?",
  "/about": "👨‍💻 Curious about my journey?",
  "/blog": "📚 Looking for technical deep dives?",
  "/contact": "💬 Let's connect - I usually reply fast!",
  "/resume": "📄 Interested in my resume? We can chat as well.",
  "/vault": "🔒 You should not be here! Its a private.",
};

export const ASSISTANT_OPTIONS: AssistantOptionType[] = [
  {
    id: "resume",
    label: "📄 View Resume",
    response: "You can access my resume using the floating resume button.",
  },
  {
    id: "Projects",
    label: "🚀 See My Projects",
    response: "Feel free to explore my projects section to see what I've been working on!",
  },
  {
    id: "contact",
    label: "💬 Contact Me",
    response: "You can reach me via LinkedIn or the contact page 🙂",
  },
];