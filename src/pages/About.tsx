import Arrow from "../components/Arrow";
import { Laptop, GraduationCap } from "phosphor-react";

export default function About() {
  return (
    <section className="min-h-screen bg-[#f7f7f5] px-6 md:px-24 py-20 text-gray-600">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h1 className="text-4xl font-light tracking-tight text-gray-800 whitespace-nowrap">
            About Me
          </h1>
          <div className="flex-1 h-px bg-gray-300 opacity-60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left: Intro */}
          <div className="space-y-6 md:col-span-1">
            <p className="leading-relaxed text-lg">
              I build intelligent, scalable software systems with a strong focus on clean architecture,
              performance, and user-centric design. I enjoy solving complex problems and turning them into
              elegant, reliable products.
            </p>
            <p className="leading-relaxed">
              My work spans full-stack development, backend systems, data-driven applications, and
              performance-critical services — always with a focus on simplicity and long-term maintainability.
            </p>

            <Arrow />
          </div>

          {/* Middle: Experience */}
          <div className="relative md:col-span-1 md:mt-12">
            <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gray-100">
                  <Laptop size={24} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Associate Consultant</h3>
                  <p className="text-sm text-gray-500">Oracle</p>
                </div>
              </div>

              <div className="h-px bg-gray-200" />

              <p className="leading-relaxed text-sm">
                I work on building and improving enterprise systems that power critical business operations.
                My role focuses on performance optimization, scalability, system reliability, and clean system
                design across distributed architectures.
              </p>

              <div className="pt-2 border-t border-gray-200 text-xs text-gray-500">
                Software Engineering • System Design • Distributed Systems • FinTech
              </div>
            </div>
          </div>

          {/* Right: Education */}
          <div className="md:col-span-1 md:pt-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <GraduationCap size={22} className="text-gray-500" />
                <h4 className="uppercase tracking-widest text-xs text-gray-500">
                  Education
                </h4>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-800 font-medium">
                    B.Tech — National Institute of Technology, Kurukshetra
                  </p>
                  <p className="text-xs text-gray-500">Engineering</p>
                </div>

                <div>
                  <p className="text-gray-800 font-medium">
                    B.Sc — Indian Institute of Technology, Madras
                  </p>
                  <p className="text-xs text-gray-500">Programming & Data Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
