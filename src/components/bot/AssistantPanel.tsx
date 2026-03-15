import { useState, useRef, useEffect } from "react";
import AssistantOption from "./AssistantOption";
import { ASSISTANT_OPTIONS } from "./Message";
import { EnvelopeSimple, GithubLogo, LinkedinLogo, ArrowCounterClockwise, X } from "phosphor-react";

type Props = {
  onClose: () => void;
};

type ChatMessage = {
  id: number;
  sender: "assistant" | "user";
  text: string;
};

const INITIAL: ChatMessage[] = [
  {
    id: 1,
    sender: "assistant",
    text: "Hey! Thanks for stopping by. Choose an option below and I'll help you out.",
  },
];

export default function AssistantPanel({ onClose }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL);
  const [visible, setVisible] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, []);

  // Auto-scroll on new message
  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleClear = () => setMessages([]);

  const handleOptionClick = (label: string, response: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(),     sender: "user",      text: label    },
      { id: Date.now() + 1, sender: "assistant",  text: response },
    ]);
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.97)",
        transition: "opacity 0.3s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
      className="fixed bottom-36 right-5 w-72 z-50 bg-white border border-[#e8e6df] rounded-md overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
    >

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e8e6df] bg-[#f5f3ee]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8440a] animate-pulse" />
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] tracking-widest uppercase text-gray-600"
          >
            Assistant
          </span>
        </div>
        <div className="flex items-center gap-1">
          {messages.length > 0 && (
            <button
              onClick={handleClear}
              title="Clear chat"
              className="flex items-center justify-center w-6 h-6 rounded-[3px]
                text-gray-400 hover:text-gray-900 hover:bg-white border border-transparent
                hover:border-[#e8e6df] transition-all duration-150 cursor-pointer"
            >
              <ArrowCounterClockwise size={12} />
            </button>
          )}
          <button
            onClick={onClose}
            title="Close"
            className="flex items-center justify-center w-6 h-6 rounded-[3px]
              text-gray-400 hover:text-gray-900 hover:bg-white border border-transparent
              hover:border-[#e8e6df] transition-all duration-150 cursor-pointer"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* ── Chat messages ── */}
      <div
        ref={chatRef}
        className="flex flex-col gap-2 px-3 py-3 max-h-48 overflow-y-auto no-scrollbar"
      >
        {messages.length === 0 ? (
          <p
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-center text-[10px] tracking-wide uppercase text-gray-400 py-4"
          >
            Select an option below to start.
          </p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`text-[12px] leading-relaxed px-3 py-2 rounded-[4px] max-w-[88%]
                ${msg.sender === "assistant"
                  ? "bg-[#f5f3ee] text-gray-700 self-start border border-[#e8e6df]"
                  : "bg-gray-900 text-white self-end"
                }`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>

      {/* ── Quick actions ── */}
      <div className="px-3 pb-3 border-t border-[#e8e6df] pt-3">
        <p
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-[9px] tracking-widest uppercase text-gray-400 mb-2"
        >
          Quick actions
        </p>
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {ASSISTANT_OPTIONS.map((option) => (
            <AssistantOption
              key={option.id}
              option={option}
              onSelect={(response) => handleOptionClick(option.label, response)}
            />
          ))}
        </div>
      </div>

      {/* ── Social footer ── */}
      <div className="flex items-center justify-center gap-2 py-2.5 border-t border-[#e8e6df]">
        {[
          { href: "https://github.com/kkamal11",            icon: <GithubLogo size={14} />,    title: "GitHub"   },
          { href: "https://www.linkedin.com/in/kkamal11",   icon: <LinkedinLogo size={14} />,  title: "LinkedIn" },
          { href: "mailto:dev.kamal.kishor@gmail.com",      icon: <EnvelopeSimple size={14} />, title: "Email"   },
        ].map((s) => (
          <a
            key={s.title}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            title={s.title}
            className="flex items-center justify-center w-6 h-6 rounded-[3px]
              border border-[#e8e6df] bg-white text-gray-400
              hover:border-gray-900 hover:text-gray-900
              transition-all duration-150"
          >
            {s.icon}
          </a>
        ))}
      </div>

    </div>
  );
}