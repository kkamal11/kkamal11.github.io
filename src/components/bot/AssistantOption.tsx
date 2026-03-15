import { type AssistantOptionType } from "./types";

type Props = {
  option: AssistantOptionType;
  onSelect: (response: string) => void;
};

export default function AssistantOption({ option, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(option.response)}
      style={{ fontFamily: "'DM Mono', monospace" }}
      className="
        shrink-0 flex items-center gap-1.5
        bg-white border border-[#e8e6df]
        px-2.5 py-1.5 rounded-[3px]
        text-[9px] tracking-widest uppercase whitespace-nowrap text-gray-500
        hover:border-gray-900 hover:text-gray-900 hover:bg-[#f5f3ee]
        transition-all duration-150 cursor-pointer
      "
    >
      <span className="w-1 h-1 rounded-full bg-[#c8440a] shrink-0" />
      {option.label}
    </button>
  );
}