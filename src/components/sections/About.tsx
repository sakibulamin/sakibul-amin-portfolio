
"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="section-wrap content-section about-section"
    >
      <Reveal>
        <div className="section-kicker">
          <span>01 / ABOUT ME</span>
          <i />
        </div>

        <h2>
          Crafting code
          <br />
          that <span className="gradient-text">performs.</span>
        </h2>
      </Reveal>

      <div className="about-grid">
  
<Reveal className="about-car">
  <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-2 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <div className="overflow-hidden rounded-xl">
      <img
        src="/image/about-me.jpeg"
        alt="Sakibul Amin"
        className="h-[350px] w-full object-cover object-center transition-transform duration-700 hover:scale-105 sm:h-[420px] lg:h-[480px]"
      />
    </div>
  </div>
</Reveal>


        <Reveal delay={0.12} className="about-copy">
          <p className="large-copy">
            I’m a web designer and full-stack developer who
            enjoys turning ideas into{" "}
            <span>modern, responsive digital experiences.</span>
          </p>

          <p>
            I work with <strong>React.js</strong>, <strong>Next.js</strong>,
            <strong> TypeScript</strong>, and <strong>Tailwind CSS</strong> to
            build clean and user-friendly interfaces. On the backend, I use
            <strong> Node.js</strong>, <strong>Express.js</strong>,
            <strong> Prisma ORM</strong>, and <strong>PostgreSQL</strong> to
            develop <strong>REST APIs</strong> and database-driven applications.
            I’m also familiar with <strong>SQL</strong>, <strong>Shadcn UI</strong>,
            <strong> Git</strong>, <strong>GitHub</strong>, and
            <strong> Docker</strong>. I enjoy solving problems, learning new
            technologies, and improving my development skills every day.
          </p>

          <div className="about-facts">
            <div>
              <strong>03<span>+</span></strong>
              <small>PROJECTS BUILT</small>
            </div>

            <div>
              <strong>Full-Stack</strong>
              <small>DEVELOPMENT</small>
            </div>

            <div>
              <strong>100<span>%</span></strong>
              <small>COMMITMENT</small>
            </div>
          </div>

          <a className="text-link" href="#contact">
            MORE ABOUT ME <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
