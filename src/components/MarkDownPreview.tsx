import { useEffect, useState, lazy, Suspense } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import {
  ArrowSquareOut,
  FileText,
  Link,
  ArrowLeft,
  DownloadSimple,
  Check,
} from "phosphor-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "github-markdown-css/github-markdown-light.css";
import { Projects } from "../utils/Data";

const Tag = lazy(() =>
  import("./Tag").then((m) => ({ default: m.Tag }))
);
const ComponentLoader = lazy(() => import("./layout/ComponentLoader"));

export default function ProjectMarkdown() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const project = Projects.find((p) => p.id === id);

  useEffect(() => {
    if (!project?.markdown) { navigate(-1); return; }
    fetch(project.markdown)
      .then((r) => r.text())
      .then(setContent)
      .catch(() => setContent("Error loading markdown content."));
  }, [project, navigate]);

  const copyProjectLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const downloadReadme = async (title: string, markdownUrl: string) => {
    try {
      const res = await fetch(markdownUrl);
      const text = await res.text();
      const blob = new Blob([text], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}-README.md`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      alert("Error downloading README: " + e.message);
    }
  };

  if (!project || !project.markdown) return <Navigate to="/projects" replace />;

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-white"
    >
      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-[#e8e6df]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] tracking-widest uppercase hidden sm:block"
            >
              Back
            </span>
          </button>

          {/* Project title — truncated */}
          <span
            className="text-[13px] text-gray-500 truncate max-w-[200px] sm:max-w-sm"
          >
            {project.title}
          </span>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            <ActionBtn
              href={project.githubUrl}
              title="Open on GitHub"
              external
            >
              <ArrowSquareOut size={15} />
            </ActionBtn>
            <ActionBtn
              href={project.githubUrl}
              title="View README on GitHub"
              external
            >
              <FileText size={15} />
            </ActionBtn>
            <ActionBtn
              onClick={copyProjectLink}
              title={linkCopied ? "Copied!" : "Copy link"}
              active={linkCopied}
            >
              {linkCopied ? <Check size={15} /> : <Link size={15} />}
            </ActionBtn>
            <ActionBtn
              onClick={() => downloadReadme(project.title, project.markdown!)}
              title="Download README"
            >
              <DownloadSimple size={15} />
            </ActionBtn>
          </div>
        </div>
      </div>

      {/* ── Page content ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* Project header */}
        <div className="mb-10 pb-8 border-b border-[#e8e6df]">
          <div className="flex items-center gap-2 mb-3">
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[12px] uppercase text-gray-400"
            >
              {project.type}
            </span>
            <span className="text-[#e8e6df]">·</span>
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[12px] tracking-widest uppercase text-gray-400"
            >
              {project.period}
            </span>
          </div>

          <h1
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight mb-5"
          >
            {project.title}
          </h1>

          <Suspense fallback={null}>
            <div className="flex flex-wrap gap-2">
              {project.techUsed?.map((tech) => (
                <Tag key={tech} slotValue={tech} />
              ))}
            </div>
          </Suspense>
        </div>

        {/* Markdown body */}
        {content ? (
          <div className="bg-white rounded-md border border-[#e8e6df] overflow-hidden">
            {/* README.md label bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e8e6df] bg-[#f5f3ee]">
              <FileText size={13} className="text-gray-400" />
              <span
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="text-[10px] tracking-widest uppercase text-gray-400"
              >
                README.md
              </span>
            </div>
            <article className="markdown-body max-w-none p-6 sm:p-8">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{ pre: CodeBlockWithCopy }}
              >
                {content}
              </ReactMarkdown>
            </article>
          </div>
        ) : (
          <Suspense fallback={null}>
            <ComponentLoader text="Loading from GitHub..." />
          </Suspense>
        )}

        {/* Footer note */}
        {content && (
          <p
            className="text-[10px] tracking-wide text-gray-400 text-center mt-6 leading-relaxed"
          >
            Rendered from the project's README.md on GitHub.
            Some formatting may differ from the original.
          </p>
        )}
      </div>
    </section>
  );
}

/* ── Action button ── */
function ActionBtn({
  children,
  href,
  onClick,
  title,
  external,
  active,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  title?: string;
  external?: boolean;
  active?: boolean;
}) {
  const cls = `
    flex items-center justify-center w-8 h-8 rounded-[4px]
    border transition-all duration-150 cursor-pointer
    ${active
      ? "bg-gray-900 text-white border-gray-900"
      : "border-[#e8e6df] text-gray-500 hover:border-gray-900 hover:text-gray-900 bg-white"
    }
  `;

  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel="noreferrer" title={title} className={cls}>
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

/* ── Code block with copy ── */
function CodeBlockWithCopy(props: any) {
  const [copied, setCopied] = useState(false);
  const code = props.children?.props?.children?.toString() || "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="
          absolute top-2.5 right-2.5 z-10
          text-[10px] tracking-widest uppercase
          px-2.5 py-1 rounded-[3px]
          border border-[#e8e6df] bg-white text-gray-500
          opacity-0 group-hover:opacity-100
          hover:border-gray-900 hover:text-gray-900
          transition-all duration-150 cursor-pointer
        "
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
      <pre {...props} />
    </div>
  );
}