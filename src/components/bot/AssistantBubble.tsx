type Props = {
  expanded: boolean;
  message: string;
  onClick: () => void;
};

export default function AssistantBubble({
  expanded,
  message,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`
        fixed bottom-20 right-10
        bg-white shadow-xl rounded-full cursor-pointer
        transition-all duration-500 ease-in-out
        flex items-center overflow-hidden z-50
        hover:scale-105
        ${expanded ? "px-4 py-3 max-w-xs" : "w-12 h-12 justify-center"}
      `}
    >
      {expanded ? (
        <span className="text-sm whitespace-nowrap">{message}</span>
      ) : (
        <span className="text-lg">💬</span>
      )}
    </div>
  );
}