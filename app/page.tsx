'use client';

import MouseGradient from "./MouseGradient";

export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)] grid gap-8 md:gap-16 p-6 md:p-20 grid-cols-1 md:grid-cols-2"
    >
            <MouseGradient/>

    {/* LEFT NAVIGATION COLUMN */}
    <div className="p-4 sticky top-0 h-fit md:h-screen flex flex-row md:flex-col gap-4 backdrop-blur-sm md:backdrop-blur-none">
      <a href="#about" className="hover:underline">About</a>
      <a href="#skills" className="hover:underline">Skills</a>
      <a href="#projects" className="hover:underline">Projects</a>
    </div>

    {/* RIGHT CONTENT COLUMN */}
    <div className="overflow-y-auto h-screen scroll-smooth md:p-8 space-y-32">
      <section id="about" className="pt-8 min-h-[100vh]">
  <h2 className="text-3xl font-bold mb-4">About</h2>
  
  <p className="text-lg leading-relaxed text-gray-300 space-y-4">
  
    I&apos;m a full-stack engineer with a strong bias for clean architecture, fast performance, and building things that don&apos;t break at scale. Over the last 5+ years, I&apos;ve worn multiple hats — leading feature-rich frontend builds, crafting APIs that don&apos;t cry under pressure, and automating deployments across cloud platforms like Azure and AWS.
    <br /><br />
    I&apos;ve built pharmacist-facing platforms used by millions, reindexed massive datasets on Elasticsearch with scheduled cron jobs, and deployed apps in containers running on EKS and AKS — all while keeping things clean, testable, and actually enjoyable to work with. Whether it&apos;s React, Next.js, Spring Boot, Node.js, or some DevOps chaos involving CI/CD pipelines, I&apos;m the person who enjoys diving deep and getting things shipped.
    <br /><br />
    I believe great software is not just about code — it&apos;s about ownership, communication, and never losing sight of the user experience. I&apos;ve mentored teammates, refactored legacy nightmares, optimized data pipelines, and even debugged production issues at ungodly hours (coffee helps).
    <br /><br />
    Outside of work, I like to stay curious — whether that&apos;s trying new tools, contributing to internal knowledge sharing, or just exploring better ways to write scalable, maintainable code. TL;DR: I build cool stuff that works well and scales better.
  </p>
</section>

      <section id="skills" className="pt-8 min-h-[100vh]">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p>React, Node.js, TypeScript, Azure, etc.</p>
      </section>

      <section id="projects" className="pt-8 min-h-[100vh]">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p>Portfolio, Dashboard, CMS, and more.</p>
      </section>
    </div>
  </div>
);

}