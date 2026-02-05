import { lazy, useEffect, useState } from "react";
import AboutComponent from "../components/AboutMeOnHome";
import Projects from './Projects'
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from 'phosphor-react';

const BlogsSection = lazy(() => import("../components/BlogsSection"));
const MySkills = lazy(() => import("../components/MySkills"));

export default function Home() {
  const [yoe, setYOE] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const yoeInterval = setInterval(() => {
      setYOE(prev => {
        if (prev >= 3) {
          clearInterval(yoeInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(yoeInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount(prev => {
        if (prev >= 5) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setParallax({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
    <section className="relative bg-[#F8F8F8] sm:min-h-screen overflow-hidden">
      
      {/* Right background image */}
      <div
        className="absolute right-0 top-0 h-full w-[65%] z-0 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}>
        <img
          src="/im2.webp"
          alt="Profile"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-top grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F8] via-[#F8F8F8]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 py-32 group">
        
        {/* Vertical Role */}
        <div className="-left-12 lg:ml-32 absolute top-36 text-xs tracking-widest rotate-270 origin-left text-gray-400 opacity-0 animate-fade-up [animation-delay:0.05s]">
          Software Engineer
        </div>

        <div className="lg:ml-48">
          {/* Stats */}
          <div className="flex gap-10 text-sm text-gray-600 mb-10 opacity-0 animate-fade-up [animation-delay:0.1s]">
            <div>
              <div className="text-3xl font-light">{yoe}+</div>
              <div className="uppercase tracking-wide text-xs">Years Of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-light">{projectCount}+</div>
              <div className="uppercase tracking-wide text-xs">Projects Completed</div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-9xl lg:text-[10rem] leading-none font-light text-gray-900 max-w-xl opacity-0 animate-fade-up [animation-delay:0.3s]">
            Hello
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500  sm:text-lg flex items-center gap-2 max-w-md opacity-0 animate-fade-up [animation-delay:0.5s]">
            <span className="inline-block w-8 h-px bg-gray-400 origin-left transform scale-x-90 transition-all duration-700 group-hover:scale-x-100 group-hover:bg-gray-700"></span>
            It's <span className="underline-offset-2 group-hover:underline">Kamal Kishor</span> - a Software Developer
          </p>
        </div>
        {/* Scroll Down */}
        <div className="lg:ml-48 absolute left-10 bottom-4 text-xs tracking-wide text-gray-400 flex flex-col gap-2">
            <div className="flex">
              <a href="https://github.com/kkamal11" target="_blank" className="hover:text-gray-700 transition-colors duration-200 cursor-pointer hover:scale-110"><GithubLogo size={22} /></a>
              <a href="https://www.linkedin.com/in/kkamal11" target="_blank" className="hover:text-gray-700 transition-colors duration-200 cursor-pointer hover:scale-110"><LinkedinLogo size={22} /></a>
              <a href="mailto:dev.kamal.kishor@gmail.com" className="hover:text-gray-700 transition-colors duration-200 cursor-pointer hover:scale-110"><EnvelopeSimple size={23} /></a>
            </div>
            <div className="opacity-80 [animation-delay:0.8s] animate-bounce">Scroll down <span>↓</span></div>
        </div>

        {/* Animated Vertical Line */}
        <div className="absolute -left-12 lg:ml-32 top-40 bottom-20 w-px bg-gray-300" />
        <div className="absolute -left-12 lg:ml-32 top-40 bottom-20 w-px bg-gray-700 origin-top transform scale-y-0 transition-transform duration-700 group-hover:scale-y-100" />

        {/* Vertical Year */}
        <div className="-left-12 lg:ml-32 absolute bottom-10 text-xs tracking-widest rotate-270 origin-left text-gray-400 opacity-0 animate-fade-up [animation-delay:0.9s]">
          {new Date().getFullYear()}
        </div>
      </div>
      </section>
      {/* {About Me} */}
      <div>
        <AboutComponent />
      </div>
      {/* skills  */}
      <div>
        <MySkills />
      </div>
      <div>
        <Projects showAll={false} />
      </div>
      <div>
          <BlogsSection />
      </div>
    </>
  );
}
