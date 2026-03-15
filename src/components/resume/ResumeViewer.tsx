import { useState } from "react";
import {
  ArrowSquareOut,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  Link,
  LinkedinLogo,
  ShareNetwork,
  Check,
} from "phosphor-react";

export default function ResumeViewer() {
  const [linkCopied, setLinkCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const share = () => {
    if (navigator.share) {
      navigator.share({ title: "Kamal Kishor Resume", url: window.location.href });
    } else {
      copyLink();
    }
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="w-full h-screen bg-[#f4f4f4] p-4"
    >
      <div className="max-w-5xl mx-auto h-full flex flex-col border border-[#e8e6df] rounded-md overflow-hidden bg-white">

        {/* ── Toolbar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3 border-b border-[#e8e6df] bg-[#f4f4f4] shrink-0">

          {/* Left — title */}
          <div className="flex items-center gap-3">
            {/* File icon decoration */}
            <div className="w-7 h-7 rounded-[3px] bg-white border border-[#e8e6df] flex items-center justify-center shrink-0">
              <span className="w-2.5 h-0.5 bg-[#c8440a] rounded-full block" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-gray-900 leading-none">Kamal Kishor Chaurasiya</p>
              <p
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[9px] tracking-widest uppercase text-gray-400 mt-0.5"
              >
                kamal_resume.pdf
              </p>
            </div>
          </div>

          {/* Right — actions */}
          <div className="flex items-center gap-1 flex-wrap">

            {/* Divider group: file actions */}
            <div className="flex items-center gap-1 pr-2 border-r border-[#e8e6df]">
              <ToolBtn href="/kamal_resume.pdf" target="_blank" title="Open in new tab">
                <ArrowSquareOut size={14} />
              </ToolBtn>
              <ToolBtn href="/kamal_resume.pdf" download title="Download PDF">
                <DownloadSimple size={14} />
              </ToolBtn>
              <ToolBtn onClick={copyLink} title={linkCopied ? "Copied!" : "Copy link"} active={linkCopied}>
                {linkCopied ? <Check size={14} /> : <Link size={14} />}
              </ToolBtn>
              <ToolBtn onClick={share} title="Share" active={shared}>
                {shared ? <Check size={14} /> : <ShareNetwork size={14} />}
              </ToolBtn>
            </div>

            {/* Divider group: social links */}
            <div className="flex items-center gap-1 pl-2">
              <ToolBtn href="https://www.linkedin.com/in/kkamal11" target="_blank" title="LinkedIn">
                <LinkedinLogo size={14} />
              </ToolBtn>
              <ToolBtn href="https://github.com/kkamal11" target="_blank" title="GitHub">
                <GithubLogo size={14} />
              </ToolBtn>
              <ToolBtn href="mailto:dev.kamal.kishor@gmail.com" title="Email">
                <EnvelopeSimple size={14} />
              </ToolBtn>
            </div>
          </div>
        </div>

        {/* ── PDF iframe ── */}
        <iframe
          src="/kamal_resume.pdf"
          title="Resume"
          className="w-full flex-1 min-h-0"
        />
      </div>
    </div>
  );
}

/* ── Shared toolbar button ── */
type ToolBtnProps = {
  children: React.ReactNode;
  href?: string;
  target?: string;
  download?: boolean | string;
  onClick?: () => void;
  title?: string;
  active?: boolean;
};

function ToolBtn({ children, href, target, download, onClick, title, active }: ToolBtnProps) {
  const cls = `
    flex items-center justify-center w-7 h-7 rounded-[3px]
    border transition-all duration-150 cursor-pointer
    ${active
      ? "bg-gray-900 text-white border-gray-900"
      : "border-[#e8e6df] bg-white text-gray-500 hover:border-gray-900 hover:text-gray-900"
    }
  `;

  if (href) {
    return (
      <a href={href} target={target} download={download} title={title} rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} title={title} className={cls}>
      {children}
    </button>
  );
}