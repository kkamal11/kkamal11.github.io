import { type AssistantOptionType } from "./types";

type Props = {
  option: AssistantOptionType;
  onSelect: (response: string) => void;
};

export default function AssistantOption({ option, onSelect }: Props) {
  return (
    <button
      onClick={() => onSelect(option.response)}
      className="
        bg-gray-100 rounded-lg px-3 py-2 text-sm text-left
        hover:bg-gray-200 transition hover:cursor-pointer
      "
    >
      {option.label}
    </button>
  );
}