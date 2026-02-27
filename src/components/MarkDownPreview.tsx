import { useEffect, useState, lazy, Suspense } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

import {
  ArrowSquareOut,
  FileText,
  Link,
  ArrowLeft,
  DownloadSimple,
} from "phosphor-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "github-markdown-css/github-markdown-light.css";
import { Projects } from "../utils/Data";

const Tag = lazy(() =>
  import("./Tag").then((module) => ({
    default: module.Tag,
  }))
);
const ComponentLoader = lazy(() => import("./layout/ComponentLoader"));

export default function ProjectMarkdown() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const project = Projects.find((p) => p.id === id);

  useEffect(() => {
    if (!project?.markdown) {
      navigate(-1);
      return;
    }

    fetch(project.markdown)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => {
        setContent("Error loading markdown content.");
      });
  }, [project, navigate]);

  const copyProjectLink = () => {
  navigator.clipboard.writeText(window.location.href);
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
    } catch (error: any) {
      alert("Error downloading README." + error.message);
    }
  };

  if (!project || !project.markdown) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-6 flex gap-4 items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className=" p-2 border border-gray-300 rounded-lg hover:bg-black hover:text-white transition
            "
          ><ArrowLeft size={18}/>
          </button>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
                p-2 border border-gray-300 rounded-lg
                hover:bg-black hover:text-white transition
              "
              title="Source Code"
            ><ArrowSquareOut size={18} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="
                p-2 border border-gray-300 rounded-lg
                hover:bg-black hover:text-white transition
              "
              title="View README on GitHub"
            >
              <FileText size={18} />
            </a>
          <button
              onClick={copyProjectLink}
              className="
                p-2 border border-gray-300 rounded-lg
                hover:bg-black hover:text-white transition hover:cursor-pointer
              "
              title="Copy project link"
            >
              <Link size={18} />
          </button>
            <button
                onClick={() => { downloadReadme(project.title, project.markdown) }}
                className="p-2 border border-gray-300 rounded-lg hover:bg-black hover:text-white transition hover:cursor-pointer"
                title="Download README"
              ><DownloadSimple size={18} />
            </button>
      </div>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          {project.title}
        </h1>
        <p className="text-xs text-gray-500 mt-2">
          {project.type} • {project.period}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <Suspense fallback={null}>
            {project.techUsed?.map((tech) => (
              <Tag key={tech} slotValue={tech} />
            ))}
          </Suspense>
        </div>
      </div>
      {content ? (
        <div className="bg-white rounded-lg p-6">
          <article className="markdown-body max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                pre:CodeBlockWithCopy
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      ) : (
        <Suspense fallback={null}>
          <ComponentLoader text="Loading from Github..." />
        </Suspense>
      )}
      {content && (
        <div className="flex items-center justify-center mt-4 sm:mt-6 text-gray-500">
          <p className="text-xs text-center">
            This markdown preview is generated from the project's README.md
            file on GitHub. Some formatting might not be rendered correctly.
          </p>
        </div>
      )}
    </section>
  );
}

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
        className="
          absolute top-2 right-2
          text-xs px-2 py-1 rounded
          text-gray-700
          bg-gray-50 border border-gray-300
          opacity-0 group-hover:opacity-100
          transition
          hover:bg-gray-100 hover:cursor-pointer
        "
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
      <pre {...props} />
    </div>
  );
}


