import { Wrench, BookOpen } from "phosphor-react";

export default function Blogs() {
  return (
    <section className="min-h-screen bg-[#f7f7f5] flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center mt-3">
          <div className="p-6 rounded-full bg-white border border-gray-200 shadow-sm">
            <Wrench size={40} className="text-gray-600" />
          </div>
        </div>
        <h1 className="text-3xl font-light text-gray-800">
          Blogs under development
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Sorry for the inconvenience - I am currently working on writing and curating
          technical blogs. In the meantime, you can explore the official documentation
          of the few technologies I work with below.
        </p>
        <div className="flex flex-col gap-3 pt-2">
          <DocLink
            href="https://docs.python.org/3/"
            label="Python Documentation"
          />
          <DocLink
            href="https://flask.palletsprojects.com/en/stable/"
            label="Flask Documentation"
          />
          <DocLink
            href="https://fastapi.tiangolo.com/"
            label="FastAPI Documentation"
          />
          <DocLink
            href="https://react.dev/"
            label="React Documentation"
          />
          <DocLink
            href="https://docs.oracle.com/en/java/"
            label="Java Documentation"
          />
          <DocLink
            href="https://docs.spring.io/spring-boot/index.html"
            label="SpringBoot Documentation"
          />
          <DocLink
            href="https://vuejs.org/guide/introduction.html"
            label="Vuejs Documentation"
          />
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pb-6">
          <BookOpen size={14} />
          <span>New articles coming soon</span>
        </div>
      </div>
    </section>
  );
}


function DocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center justify-center
        px-4 py-2 rounded-lg
        bg-white border border-gray-200
        text-sm text-gray-700
        hover:bg-gray-50 hover:shadow-sm
        transition
      "
    >
      {label} ↗
    </a>
  );
}
