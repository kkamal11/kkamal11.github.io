import Arrow from "../components/Arrow";
import { Laptop, GraduationCap, Sparkle } from "phosphor-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <div className="relative bg-[#f7f7f5] mx-4 md:mx-18 py-12 text-gray-600">
      <div className="flex items-center gap-4 mb-2">
        <h1 className="text-3xl text-gray-700 whitespace-nowrap">About Me</h1>
        <div className="h-px flex-1 bg-gray-300 opacity-60 mr-32 lg:mr-72" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_1fr] gap-10 text-sm">
        <Reveal hiddenClass="opacity-0 -translate-x-16">
          <div className="">
            <p className="leading-relaxed">
              I specialize in building intelligent, scalable software solutions by combining modern web development with data-driven thinking. My work spans from intuitive frontends to efficient backend services and analytics-ready systems. I enjoy turning complex problems into simple, reliable products that users and businesses can trust.
            </p>
            <Arrow />
          </div>
        </Reveal>
        <div className="relative top-6">
          <Reveal hiddenClass="opacity-0 translate-y-12 scale-95">
              <div className="rounded-xl p-6 bg-white border border-gray-200 space-y-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gray-100">
                    <Laptop size={22} className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Oracle</h3> {/*can be role */ }
                    {/* <p className="text-sm text-gray-500">Oracle</p> */}
                  </div>
                </div>

                <div className="h-px bg-gray-200" />
                <p className="leading-relaxed text-gray-600">
                  Currently, at Oracle, I work on building and improving enterprise systems that power critical business operations. My role focuses on enhancing performance, reliability, and scalability by refining system design, optimizing workflows, and strengthening data processing.
                </p>

                <div className="pt-2 border-t border-gray-200 text-xs text-gray-500">
                  Software Development • Microservices • FinTech • System Design • Software Testing
                </div>
              </div>
          </Reveal>
        </div>
        <Reveal hiddenClass="opacity-0 translate-x-16">
            <div className="flex flex-col justify-end">
              <div className="rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-100">
                    <GraduationCap size={20} className="text-gray-600" />
                  </div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500">Education</h4>
                </div>
                <div className="space-y-3">
                <div className="flex items-start gap-2">
                    <Sparkle
                    size={18}
                    weight="fill"
                    className="mt-0.5 text-gray-800/70 shrink-0"
                    />
                    <div>
                    <p className="text-gray-800 font-medium">
                        B.Tech — National Institute of Technology, Kurukshetra
                    </p>
                      <p className="text-xs text-gray-500">Engineering</p>
                      <p className="text-[10px] text-gray-500">2019 - 2023</p>
                    </div>
                </div>
                <div className="flex items-start gap-2">
                    <Sparkle
                    size={18}
                    weight="fill"
                    className="mt-0.5 text-gray-800/70 shrink-0"
                    />
                    <div>
                    <p className="text-gray-800 font-medium">
                        B.Sc — Indian Institute of Technology, Madras
                    </p>
                      <p className="text-xs text-gray-500">Programming & Data Science</p>
                      <p className="text-[10px] text-gray-500">2021 - 2025</p>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </Reveal>
      </div>
    </div>
  );
}
