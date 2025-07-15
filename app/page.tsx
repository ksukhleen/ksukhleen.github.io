"use client";

import MouseGradient from "./MouseGradient";

export default function Home() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <MouseGradient />

      {/* LEFT NAVIGATION COLUMN */}
      <div className="p-4 sticky top-0 h-fit md:h-screen flex flex-row md:flex-col gap-4 backdrop-blur-sm md:backdrop-blur-none">
        <div className="py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Sukhleen Kaur</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Full Stack Engineer
          </h2>

          <p className="mt-4 max-w-xs leading-normal">
            I build scalable websites
          </p>

          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <li>
                <a className="group flex items-center py-3 active" href="#about">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#experience">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Experience
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3 " href="#projects">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projects
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* RIGHT CONTENT COLUMN */}
      <div className="overflow-y-auto h-screen scroll-smooth md:p-8 space-y-32">
        <section id="about" className="pt-8 min-h-[100vh]">

          <p className="text-lg leading-relaxed text-gray-300 space-y-4">
            I&apos;m a full-stack engineer with a strong bias for clean
            architecture, fast performance, and building things that don&apos;t
            break at scale. Over the last 5+ years, I&apos;ve worn multiple hats
            — leading feature-rich frontend builds, crafting APIs that
            don&apos;t cry under pressure, and automating deployments across
            cloud platforms like Azure and AWS.
            <br />
            <br />
            I&apos;ve built pharmacist-facing platforms used by millions,
            reindexed massive datasets on Elasticsearch with scheduled cron
            jobs, and deployed apps in containers running on EKS and AKS — all
            while keeping things clean, testable, and actually enjoyable to work
            with. Whether it&apos;s React, Next.js, Spring Boot, Node.js, or
            some DevOps chaos involving CI/CD pipelines, I&apos;m the person who
            enjoys diving deep and getting things shipped.
            <br />
            <br />
            I believe great software is not just about code — it&apos;s about
            ownership, communication, and never losing sight of the user
            experience. I&apos;ve mentored teammates, refactored legacy
            nightmares, optimized data pipelines, and even debugged production
            issues at ungodly hours (coffee helps).
            <br />
            <br />
            Outside of work, I like to stay curious — whether that&apos;s trying
            new tools, contributing to internal knowledge sharing, or just
            exploring better ways to write scalable, maintainable code. TL;DR: I
            build cool stuff that works well and scales better.
          </p>
        </section>

        <section id="experience" className="pt-8 min-h-[100vh]">
      
          <p>React, Node.js, TypeScript, Azure, etc.</p>
        </section>

        <section id="projects" className="pt-8 min-h-[100vh]">
       
          <p>Portfolio, Dashboard, CMS, and more.</p>
        </section>
      </div>
    </div>
  );
}
