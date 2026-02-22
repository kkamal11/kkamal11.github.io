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
    id: "about",
    label: "👨‍💻 About Me",
    response: "I'm a passionate developer with experience in building web applications using modern technologies. I use Python, Java and JavaScript technologies to create efficient and scalable solutions. I enjoy learning new technologies and am always looking for opportunities to grow and collaborate on exciting projects. Feel free to explore my portfolio to see some of my work and get in touch if you'd like to connect!",
  },
  {
    id: "resume",
    label: "📄 View Resume",
    response: "You can access my resume using the floating resume button just below the assistant.",
  },
  {
    id: "Projects",
    label: "🚀 See Projects",
    response: "Feel free to explore my projects section to see what I've been working on. Recently, I made a custom wsgi-compatible web server using Python and have been working with JavaScript and React to create interactive we apps",
  },
  {
    id: "contact",
    label: "💬 Contact Me",
    response: "You can reach me via LinkedIn or the contact page 🙂",
  },
  {
    id: "blog",
    label: "📚 Read Blogs",
    response: "I share my thoughts and insights on web development, programming languages, and industry trends in my blog section. That part is still in development though!",
  },
  {
    id: "vault",
    label: "🔒 Vault",
    response: "That's my secret vault! You shouldn't be there 😅. I just made it to keep notes, files and other information so that I can access them easily anywhere.",
  },
  {
    id: "python",
    label: "🐍 Python",
    response: "I am a Pyhonist! I have experience in using Python for web development, data analysis, and automation. I enjoy working with frameworks like Python Frameworks to create efficient and scalable web applications. I also use Python for data analysis and visualization, leveraging libraries like Pandas and Matplotlib to gain insights from data. Additionally, I utilize Python for automating repetitive tasks and improving productivity. Python is a so versatile that I find both powerful and enjoyable to work with.",
  }
];