import {
  ArrowSquareOut,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  Link,
  LinkedinLogo,
  ShareNetwork,
} from "phosphor-react";
export default function ResumeViewer() {
  return (
    <div className="w-full h-screen bg-[#f4f4f4] p-4">
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full">
        <div className="px-4 py-2 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Kamal's Resume Viewer
          </h2>
          <div className="flex gap-2 bg-white px-2">
              <a
                href="/kamal_resume.pdf"
                target="_blank"
                className="p-2 rounded-full hover:bg-gray-100 transition"
                title="View Resume"
              ><ArrowSquareOut size={18} />
              </a>
              <a
                href="/kamal_resume.pdf"
                download
                className="p-2 rounded-full hover:bg-gray-100 transition"
                title="Download Resume"
              ><DownloadSimple size={18} />
            </a>
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="p-2 rounded-full hover:bg-gray-100 transition hover:cursor-pointer"
                title="Copy Link"
              ><Link size={18} />
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Kamal Kishor Resume",
                      url: window.location.href,
                    });
                  }
                }}
                className="p-2 rounded-full hover:bg-gray-100 transition hover:cursor-pointer"
                title="Share"
              ><ShareNetwork size={18} />
            </button>
              <a
                href="https://www.linkedin.com/in/kkamal11"
                target="_blank"
                className="p-2 rounded-full hover:bg-gray-100 transition"
                title="LinkedIn"
              >
                <LinkedinLogo size={18} />
            </a>
             <a
                href="https://github.com/kkamal11"
                target="_blank"
                className="p-2 rounded-full hover:bg-gray-100 transition"
                title="GitHub"
              ><GithubLogo size={18} />
              </a>
              <a
                href="mailto:dev.kamal.kishor@gmail.com"
                className="p-2 rounded-full hover:bg-gray-100 transition"
                title="Contact"
              ><EnvelopeSimple size={18} />
              </a>
            </div>
        </div>

        <iframe
          src="/kamal_resume.pdf"
          title="Resume"
          className="w-full h-[calc(100%-56px)]"
        />
      </div>
    </div>
  );
}
