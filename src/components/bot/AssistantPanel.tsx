import { useState } from "react";
import AssistantOption from "./AssistantOption";
import { ASSISTANT_OPTIONS } from "./Message";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";

type Props = {
  onClose: () => void;
};

export default function AssistantPanel({ onClose }: Props) {
  const [response, setResponse] = useState("");

  return (
    <div
      className="
        fixed bottom-36 right-10
        w-72 bg-white rounded-lg shadow-2xl
        p-4 z-50 animate-fade-in
      "
    >
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-semibold">Your Assistant 🤖</p>
        <button onClick={onClose} className="hover:cursor-pointer hover:text-red-700">✕</button>
      </div>

      <div className="flex flex-col gap-2">
        {ASSISTANT_OPTIONS.map((option) => (
          <AssistantOption
            key={option.id}
            option={option}
            onSelect={setResponse}
          />
        ))}
      </div>

      {response && (
        <p className="mt-4 text-sm text-gray-600">{response}</p>
      )}
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