import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GithubGrayButton, GithubGrayButtonRound } from "../components/SocialButtons";
import { Lightning } from "phosphor-react";
import ImageCard from '../components/PimageCard';
import { Projects } from "../utils/Data";

type ProjectsSectionProps = {
  showAll?: boolean;
};

export default function ProjectsSection({ showAll = true }: ProjectsSectionProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const visibleProjects = showAll ? Projects : Projects.slice(0, 3);
  return (
    <section className="bg-white py-10 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-4">
          <div>
            <h2 className="text-4xl font-[400px] tracking-tight text-gray-800 whitespace-nowrap">
              Explore My Projects <br /> Journey
            </h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p className="text-[15px]">
              Over the past 4+ years, I've had the opportunity to work on a wide
              range of projects as part of my academics as well as professional experience, collaborating with diverse teams and
              clients to bring creative visions to life.
            </p>
            <GithubGrayButton url="https://github.com/kkamal11" />
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-200">
          {visibleProjects.map((proj) => {
            const isOpen = openId === proj.id;

            return (
              <div
                key={proj.id}
                className="py-6"
                onMouseEnter={() => setOpenId(proj.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                {/* Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 cursor-pointer group">
                  <div>
                    <p className="text-lg text-gray-900 font-medium group-hover:text-black transition">
                      {proj.title}
                    </p>
                        <p className="text-[10px] text-gray-500 mt-1"> {proj.period}</p>
                        <p className="text-xs text-gray-500 mt-1"> {proj.btm_text}</p>
                  </div>

                  <p className="text-sm font-medium text-gray-600 text-center">{proj.type}</p>

                  <div className="flex justify-start md:justify-end gap-2">
                    {proj.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded bg-gray-50 text-gray-600 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Expand Panel */}
                <div
                  className={`
                    overflow-auto transition-all duration-700 ease-out
                    ${isOpen ? "opacity-100 mt-6" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="ml-4 md:ml-0 bg-white border border-gray-200 rounded p-6 text-sm text-gray-600 shadow-sm">
                        <div className="">
                            <div className="flex flex-col">
                                <p className="leading-relaxed pb-3 text-gray-700 text-[15px] italic tracking-[0.01em]">{proj.description}</p>
                                {/* {Feature + img + github btn} */}
                                <div className="flex flex-col sm:flex-row justify-between items-center">
                                  <div>
                                    <p className="font-medium">Features:</p>
                                    <ul>
                                        {proj.features.map(feat => {
                                          return  <li><Lightning className="inline-block" size={16} key={feat}  />{feat}</li>
                                        })}
                                    </ul> 
                                  </div>
                                  <div className="p-4 sm:px-8 flex justify-center items-center">
                                          {proj.imgPath?.map((path, i) => {
                                            return <ImageCard key={i} src={path} alt="Image" />
                                      })}
                                  </div>
                                  <div className="mt-2 sm:mt-0">
                                    <GithubGrayButtonRound url={proj.githubUrl} />
                                  </div>
                                </div>
                                <p className="font-medium mt-4">Tech Stack:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                {proj.techUsed.map((tech) => (
                                    <span
                                    key={tech}
                                    className="px-2 py-1 text-xs rounded bg-gray-50 border border-gray-200 text-gray-700 hover:scale-105 transition hover:cursor-pointer"
                                    >
                                    {tech}
                                    </span>
                                ))}
                                </div>
                                <div className={proj.ext_buttons ? "flex gap-4 justify-base item-center mt-4 md:mt-6" : ''}>
                                  {proj.ext_buttons?.map((btn) => (
                                  <MLNotebookButtons key={btn.href} btn={btn} />
                                ))}
                                </div>
                            </div>
                        </div>
                 </div>
                </div>
              </div>
            );
          })}
        </div>
        {!showAll ? 
            <div className="flex items-center justify-center mt-2">
              <NavLink to={'/projects'}
              className="border border-gray-800 px-4 py-2 rounded text-sm hover:bg-black hover:text-white transition cursor-pointer"
              > See All
              </NavLink>
          </div>
          : null}
      </div>
    </section>
  );
}


type MLButton = {
  href: string;
  label: string;
  img: string;
};

function MLNotebookButtons({ btn }: { btn: MLButton }) {
  return (
    <a
      href={btn.href}
      target="_blank"
      rel="noreferrer"
    >
      <img src={btn.img} alt={btn.label} />
    </a>
  );
}
