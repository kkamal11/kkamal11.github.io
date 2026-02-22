import { useEffect, useState, lazy } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "github-markdown-css/github-markdown-light.css";
import { Projects } from "../utils/Data";

const ReactMarkdown = lazy(() => import("react-markdown"));
const Tag = lazy(() => import("./Tag")
    .then(module => (
        { default: module.Tag }
    )));
export default function ProjectMarkdown() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const project = Projects.find((p) => p.id === Number(id));
    

  useEffect(() => {
    if (!project?.markdown) {
        navigate(-1);
        return;
    };
    fetch(project.markdown)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      }).catch(() => {
        setContent("Error loading markdown content.");
      })
  }, [project, navigate]);

    if (!project || !project.markdown) {
        return <Navigate to="/projects" replace={true} />;
    }
    return (
    <section className="max-w-5xl mx-auto px-4 py-10">
        <button
        onClick={() => navigate(-1)}
        className="mb-6 border border-gray-800 px-4 py-2 rounded-lg text-sm text-center hover:bg-black hover:text-white transition hover:cursor-pointer"
        >
        ← Back
        </button>
        <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
            {project.title}
        </h1>

        <p className="text-xs text-gray-500 mt-2">
            {project.type} • {project.period}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
            {project.techUsed?.map((tech) => (
            <Tag key={tech} slotValue={tech} />
            ))}
        </div>
        </div>
        <div className="bg-white rounded-lg p-6">
                <article className="markdown-body">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ inline, className, children }) {
                                const match = /language-(\w+)/.exec(className || "");
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={oneLight}
                                        language={match[1]}
                                        PreTag="div"
                                    >{String(children).replace(/\n$/, "")}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code>{children}</code>
                                );
                            },
                        }}>
                        {content}
                    </ReactMarkdown>
                </article>
            </div>
    </section>
);

}
