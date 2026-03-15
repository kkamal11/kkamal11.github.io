type Props = {
  expanded: boolean;
  message: string;
  onClick: () => void;
};

export default function AssistantBubble({ expanded, message, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className={`
        fixed bottom-20 right-12 z-50
        flex items-center cursor-pointer
        border bg-white
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        overflow-hidden
        ${expanded
          ? "rounded-[6px] border-[#e8e6df] px-4 py-2.5 max-w-xs hover:border-gray-400"
          : "rounded-full w-10 h-10 justify-center border-[#e8e6df] hover:border-gray-900"
        }
      `}
    >
      {expanded ? (
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Pulsing dot */}
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8440a] animate-pulse shrink-0" />
          <span
            className="text-[12px] tracking-wide text-gray-700 whitespace-nowrap truncate"
          >
            {message}
          </span>
        </div>
      ) : (
        /* Collapsed — chat icon in SVG instead of emoji */
        <svg
          width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="#c8440a" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )}
    </div>
  );
}