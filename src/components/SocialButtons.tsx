import { GithubLogo, ArrowSquareOut } from "phosphor-react"
import { useState } from "react";

type GithubGrayButtonProps = {
  url: string;
};

type SocialButtonsProps = {
  link: string;
  name: string;
  bgColor?: string;
};

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  blue:   { border: "#0a6bc8", text: "#0a6bc8", bg: "#f0f6ff" },
  gray:   { border: "#1a1916", text: "#1a1916", bg: "#f5f3ee" },
  green:  { border: "#0a8c5a", text: "#0a8c5a", bg: "#f0fff8" },
  maroon: { border: "#c8440a", text: "#c8440a", bg: "#fff5f0" },
  yellow: { border: "#b87d0a", text: "#b87d0a", bg: "#fadb87ff" },
};

export function SocialButton({ link, name, bgColor = "gray" }: SocialButtonsProps) {
  const color = colorMap[bgColor] ?? colorMap["gray"];
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:  "'DM Mono', monospace",
        borderColor: hovered ? color.border : "#e8e6df",
        color:       hovered ? color.text   : "#b1b1aeff",
        background:  hovered ? color.bg     : "transparent",
        transition:  "border-color 0.15s, color 0.15s, background 0.15s",
      }}
      className="flex-shrink-0 flex items-center gap-1.5
        border rounded-[3px] px-5 py-2
        text-[10px] tracking-wide uppercase cursor-pointer"
    >
      {name}
      <span
        style={{ color: hovered ? color.text : "#d4d0c8", transition: "color 0.15s" }}
        className="text-[10px]"
      >
        ↗
      </span>
    </a>
  );
}

export function GithubGrayButton({url}:GithubGrayButtonProps) {
    return (
        <div>
            <a href={url}target="_blank"
              className="inline-flex items-center gap-1 text-sm text-gray-800 hover:text-gray-50 hover:bg-gray-900 transition duration-300 cursor-pointer hover:scale-110 border border-gray-400 p-2 rounded"
            >
              Github<GithubLogo size={18} />
            </a>
        </div>
    )
}

export function GithubGrayButtonRound({ url }: GithubGrayButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center text-white
        bg-black transition duration-300 cursor-pointer hover:scale-105 px-3 py-5 rounded-full"
      title="Open on GitHub in new tab"
    >
      <GithubLogo size={23} weight="fill" />
      <ArrowSquareOut size={23} />
    </a>
  );
}
