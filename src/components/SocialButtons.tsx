import { GithubLogo, ArrowSquareOut } from "phosphor-react"
export function LinkedButton() {
    return (
        <div className="bg-blue-600 px-3 py-2 rounded-md text-gray-100 font-medium text-sm scale-95 hover:bg-blue-700">
            <a href="https://www.linkedin.com/in/kkamal11" target="_blank">LinkedIn</a>
        </div>
    )
}

export function GithubButton() {
        return ( 
        <div className="bg-gray-600 px-3 py-2 rounded-md text-gray-100 font-medium text-sm scale-95 hover:bg-gray-700">
            <a href="https://github.com/kkamal11" target="_blank">Github</a>
        </div>
    )
}

type GithubGrayButtonProps = {
  url: string;
};

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
