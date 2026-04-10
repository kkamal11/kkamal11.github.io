import { useEffect, useState } from "react";
import {
  GitFork, Star, Users, BookOpen,
  ArrowSquareOut,
  ArrowLeft, ArrowRight,
  Code,
} from "phosphor-react";
import Reveal from "./Reveal";
import ComponentLoader from "./layout/ComponentLoader";

const USERNAME  = "kkamal11";
const REPOS_API = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`;
const USER_API  = `https://api.github.com/users/${USERNAME}`;
const PER_PAGE  = 6;

type GHUser = { public_repos: number; followers: number; following: number };

type Repo = {
  name:             string;
  description:      string | null;
  stargazers_count: number;
  forks_count:      number;
  language:         string | null;
  html_url:         string;
  updated_at:       string;
  fork:             boolean;
};

const langColor: Record<string, string> = {
  TypeScript:  "#0a6bc8",
  JavaScript:  "#b87d0a",
  Python:      "#0a8c5a",
  Java:        "#c8440a",
  Go:          "#0a9eb8",
  Rust:        "#a8440a",
  CSS:         "#7c3ac8",
  HTML:        "#c8440a",
  "C++":       "#0a6bc8",
  Shell:       "#0a8c5a",
};

function timeAgo(dateStr: string): string {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);

  if (seconds < 60) return "just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;

  const days = Math.floor(hours / 24);
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;

  const years = Math.floor(months / 12);
  return `${years}y ago`;
}

export default function GithubStats() {
  const [user, setUser]       = useState<GHUser | null>(null);
  const [allRepos, setAllRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage]       = useState(0);

  useEffect(() => {
    Promise.all([
      fetch(USER_API).then((r) => r.json()),
      fetch(REPOS_API).then((r) => r.json()),
    ]).then(([u, repos]) => {
      setUser(u);
      setAllRepos((repos as Repo[]).filter((r) => !r.fork));
      setLoading(false);
    });
  }, []);

  const totalStars = allRepos.reduce((s, r) => s + r.stargazers_count, 0);
  const totalPages = Math.ceil(allRepos.length / PER_PAGE);
  const pageRepos  = allRepos.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const langMap: Record<string, number> = {};
  allRepos.forEach((r) => { if (r.language) langMap[r.language] = (langMap[r.language] ?? 0) + 1; });
  const langs = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 5);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="bg-white px-6 md:px-12 py-10"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-gray-900">
          <h2
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
            className="text-4xl font-light text-gray-900"
          >
            GitHub <em className="text-[#c8440a]">Activity</em>
          </h2>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase
              text-gray-500 hover:text-gray-900 transition-colors duration-150"
          >
            @{USERNAME} <ArrowSquareOut size={11} />
          </a>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <ComponentLoader text="Loading from Github..." />
          </div>
        ) : (
          <div className="flex flex-col gap-8">

            {/* ── Stat cards ── */}
            <Reveal hiddenClass="opacity-0 translate-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "Public Repos", value: user?.public_repos ?? 0, icon: <BookOpen size={14} /> },
                  { label: "Total Stars",  value: totalStars,              icon: <Star size={14} /> },
                  { label: "Followers",    value: user?.followers ?? 0,    icon: <Users size={14} /> },
                  { label: "Following",    value: user?.following ?? 0,    icon: <Users size={14} /> },
                ].map((s) => (
                  <div key={s.label} className="bg-[#f5f3ee] border border-[#e8e6df] rounded-md px-4 py-4 transition-transform duration-200 hover:scale-[1.01]">
                    <div className="flex items-center gap-1.5 mb-2 text-gray-400 ">
                      {s.icon}
                      <span
                        style={{ fontFamily: "'DM Mono', monospace" }}
                        className="text-[9px] tracking-widest uppercase"
                      >
                        {s.label}
                      </span>
                    </div>
                    <p
                      style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
                      className="text-3xl font-light text-gray-900"
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── Streak ── */}
            <Reveal hiddenClass="opacity-0 translate-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-stretch">
                    <div className="h-full transition-transform duration-200 hover:scale-[1.01]">
                        <p
                        style={{ fontFamily: "'DM Mono', monospace" }}
                        className="text-[10px] tracking-widest uppercase text-gray-400 mb-3 flex items-center gap-2"
                        >
                        <Star size={11} /> Streak
                        </p>
                        <div className="border border-[#e8e6df] rounded-md overflow-hidden bg-[#f5f3ee] p-4 flex justify-center">
                            <img
                                src={`https://streak-stats.demolab.com/?user=${USERNAME}&theme=default&hide_border=true&background=f5f3ee&ring=c8440a&fire=c8440a&currStreakLabel=1a1916&sideLabels=6b6b66&dates=9a9890&stroke=e8e6df`}
                                alt="GitHub Streak"
                                className="max-w-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    {/* Language breakdown */}
                    <div className="h-full transition-transform duration-200 hover:scale-[1.01]">
                        <p
                        style={{ fontFamily: "'DM Mono', monospace" }}
                        className="text-[10px] tracking-widest uppercase text-gray-400 mb-3 flex items-center gap-2"
                        >
                        <Code size={11} /> Top Languages
                        </p>
                        <div className="flex flex-col gap-3 border border-[#e8e6df] rounded-md overflow-hidden bg-[#f5f3ee] p-4 w-full">                            {langs.map(([lang, count]) => {
                            const pct   = Math.round((count / allRepos.length) * 100);
                            const color = langColor[lang] ?? "#888";
                            return (
                                <div key={lang}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                                    <span
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                        className="text-[10px] uppercase tracking-wide text-gray-600"
                                    >
                                        {lang}
                                    </span>
                                    </span>
                                    <span
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                    className="text-[10px] text-gray-400"
                                    >
                                    {pct}%
                                    </span>
                                </div>
                                <div className="h-1 bg-[#f0ede5] rounded-full overflow-hidden">
                                    <div
                                    className="h-full rounded-full transition-all duration-1000"
                                    style={{ width: `${pct}%`, background: color }}
                                    />
                                </div>
                                </div>
                            );
                            })}
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* ── Repo ── */}
            <div className="">

              {/* Repos list with pagination */}
              <Reveal hiddenClass="opacity-0 translate-x-[-16px]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-[10px] tracking-widest uppercase text-gray-400 flex items-center gap-2"
                    >
                      <BookOpen size={11} /> Repositories ({allRepos.length})
                    </p>

                    {totalPages > 1 && (
                      <div className="flex items-center gap-2">
                        <span
                          style={{ fontFamily: "'DM Mono', monospace" }}
                          className="text-[9px] tracking-widest uppercase text-gray-400"
                        >
                          {page + 1}/{totalPages}
                        </span>
                        <button
                          onClick={() => setPage((p) => Math.max(p - 1, 0))}
                          disabled={page === 0}
                          className="flex items-center justify-center w-6 h-6 rounded-[3px] border transition-all duration-150"
                          style={{
                            borderColor: page === 0 ? "#e8e6df" : "#1a1916",
                            color:       page === 0 ? "#d4d0c8" : "#1a1916",
                            cursor:      page === 0 ? "not-allowed" : "pointer",
                            background: "white",
                          }}
                        >
                          <ArrowLeft size={11} />
                        </button>
                        <button
                          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                          disabled={page === totalPages - 1}
                          className="flex items-center justify-center w-6 h-6 rounded-[3px] border transition-all duration-150"
                          style={{
                            borderColor: page === totalPages - 1 ? "#e8e6df" : "#1a1916",
                            color:       page === totalPages - 1 ? "#d4d0c8" : "white",
                            background:  page === totalPages - 1 ? "white"   : "#1a1916",
                            cursor:      page === totalPages - 1 ? "not-allowed" : "pointer",
                          }}
                        >
                          <ArrowRight size={11} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="border border-[#e8e6df] rounded-md overflow-hidden divide-y divide-[#e8e6df]">
                    {pageRepos.map((repo) => (
                      <a
                        key={repo.name}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between px-4 py-3
                          hover:bg-[#f5f3ee] transition-colors duration-150"
                      >
                        <div className="flex flex-col min-w-0 gap-0.5">
                          <span className="text-[13px] font-medium text-gray-900 truncate
                            group-hover:text-[#c8440a] transition-colors duration-150">
                            {repo.name}
                          </span>
                          {repo.description && (
                            <span className="text-[11px] text-gray-400 truncate">{repo.description}</span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 shrink-0 ml-4">
                          <span
                            style={{ fontFamily: "'DM Mono', monospace" }}
                            className="text-[9px] text-gray-400 hidden md:block"
                          >
                            {timeAgo(repo.updated_at)}
                          </span>
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <span
                                className="w-2 h-2 rounded-full"
                                style={{ background: langColor[repo.language] ?? "#888" }}
                              />
                              <span
                                style={{ fontFamily: "'DM Mono', monospace" }}
                                className="text-[9px] uppercase tracking-wide text-gray-400 hidden md:block"
                              >
                                {repo.language}
                              </span>
                            </span>
                          )}
                          <span className="flex items-center gap-0.5 text-gray-400">
                            <Star size={11} />
                            <span style={{ fontFamily: "'DM Mono', monospace" }} className="text-[10px]">
                              {repo.stargazers_count}
                            </span>
                          </span>
                          <span className="flex items-center gap-0.5 text-gray-400">
                            <GitFork size={11} />
                            <span style={{ fontFamily: "'DM Mono', monospace" }} className="text-[10px]">
                              {repo.forks_count}
                            </span>
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}