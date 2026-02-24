import { blogs } from "../utils/Data";
import { type Blog } from "../utils/Data";
import { NavLink } from "react-router-dom";
import Reveal from "./Reveal";

export default function BlogsSection() {
  return (
    <section className="bg-[#f7f7f5] py-6 sm:py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-500">
            ● Blogs
          </span>
          <h2 className="text-4xl font-[400px] tracking-tight text-gray-800">
            Technology Insights & Trends
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Reveal key={blog.id} hiddenClass="opacity-0 translate-y-12 scale-95">
              <BlogCard blog={blog} />
            </Reveal>
          ))}
        </div>
        <div className="flex items-center justify-center mt-6 sm:mt-12">
            <NavLink to={'/blog'}
            className="border border-gray-400 px-4 py-2 rounded text-sm text-gray-800 hover:bg-black hover:text-white transition cursor-pointer"
            > View Blogs
            </NavLink>
        </div>
       </div>
    </section>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-60 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center flex-wrap gap-2 text-[10px] text-gray-500">
          {blog.category.map((cat, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded bg-gray-100 border border-gray-200 uppercase tracking-wide"
            >
              {cat}
            </span>
          ))}
          <span>{blog.readTime}</span>
        </div>
        <h3 className="text-base font-medium text-gray-700 leading-snug">
          {blog.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          {blog.description}
        </p>
      </div>
    </div>
  );
}
