import { useState,  useRef, useEffect  } from "react";
import AssistantOption from "./AssistantOption";
import { ASSISTANT_OPTIONS } from "./Message";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";

type Props = {
  onClose: () => void;
};
type ChatMessage = {
  id: number;
  sender: "assistant" | "user";
  text: string;
};

export default function AssistantPanel({ onClose }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([
      {
        id: 1,
        sender: "assistant",
        text: "👋 Hey! Thanks for stopping by. To let me assist you better, choose an option below!",
      },
  ]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      chatRef.current?.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
  }, [messages]);

  const handleClearChat = () => { 
    setMessages([]);
  }
  
  const handleOptionClick = (label: string, response: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: label,
      },
      {
        id: Date.now() + 1,
        sender: "assistant",
        text: response,
      },
    ]);
  };
  return (
    <div
      className="
        fixed bottom-36 right-10
        w-72 bg-white rounded-lg shadow-2xl
        py-4 px-3 z-50 animate-fade-in
      "
    >
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-semibold">Your Assistant 🤖</p>
        <div className="flex space-x-4">
          {messages.length > 0 && <button onClick={handleClearChat} className="hover:cursor-pointer hover:text-red-700">↻</button>}
          <button onClick={onClose} className="hover:cursor-pointer hover:text-red-700">✕</button>
        </div>
      </div>

      <div ref={chatRef} className="my-4 flex flex-col gap-2 max-h-48 overflow-y-auto no-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`text-xs px-3 py-2 rounded-lg max-w-[85%]
                ${
                  msg.sender === "assistant"
                    ? "bg-gray-100 text-gray-700 self-end"
                    : "bg-blue-500 text-white self-start"
                }
              `}
            >{msg.text}
            </div>
          ))}
          {messages.length === 0 && (
            <p className="text-center text-gray-400 text-xs mt-2">Chat has been cleared. Select an option below to start again!</p>
          )}
      </div>
      <p className="text-[10px] text-gray-400 mb-1 text-center">Quick actions</p>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {ASSISTANT_OPTIONS.map((option) => (
          <AssistantOption
            key={option.id}
            option={option}
            onSelect={(response) =>handleOptionClick(option.label, response)}
          />
        ))}
      </div>
        <div className="text-xs tracking-wide text-gray-400 ">
            <div className="flex flex-row gap-1 mt-2 justify-center items-center">
              <a href="https://github.com/kkamal11" target="_blank" className="hover:text-gray-700 transition-colors duration-200 cursor-pointer hover:scale-110"><GithubLogo size={18} /></a>
              <a href="https://www.linkedin.com/in/kkamal11" target="_blank" className="hover:text-gray-700 transition-colors duration-200 cursor-pointer hover:scale-110"><LinkedinLogo size={18} /></a>
              <a href="mailto:dev.kamal.kishor@gmail.com" className="hover:text-gray-700 transition-colors duration-200 cursor-pointer hover:scale-110"><EnvelopeSimple size={20} /></a>
            </div>
        </div>
    </div>
  );
}