import { GithubLogo, ArrowSquareOut } from "phosphor-react"

type GithubGrayButtonProps = {
  url: string;
};

type SocialButtonsProps = {
  link: string,
  name: string;
  bgColor?: string;
}

const colorMap = {
  blue: "bg-blue-600 hover:bg-blue-700",
  gray: "bg-gray-600 hover:bg-gray-700",
  green: "bg-green-600 hover:bg-green-700",
};

export function SocialButton({ link, name, bgColor = "gray" }: SocialButtonsProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={`${colorMap[bgColor as keyof typeof colorMap]} px-3 py-2 rounded-md text-gray-100 font-medium text-sm scale-95 hover:scale-[1.03] transition duration-200`}
      >{name}
    </a>
    )
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
