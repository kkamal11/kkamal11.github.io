import { useEffect, useState, lazy, Suspense } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

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
  const project = Projects.find((p) => p.id === Number(id));

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

  if (!project || !project.markdown) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-6 flex gap-4 items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="border border-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
        >
          ← Back
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="border border-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
        >
          Source Code on Github ↗
        </a>
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



