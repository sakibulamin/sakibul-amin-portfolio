
"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const projects = [
  {
    no: "01",
    title: "FixItNow",
    type: "Service Platform · Next.js",
    desc: "A home-service platform that helps users find trusted technicians, book services, and manage secure payments.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    color: "project-blue",
    image: "/image/fixitnow.png",
    url: "https://fix-it-now-frontend-bay.vercel.app",
  },
  {
    no: "02",
    title: "Movie Explorer",
    type: "Movie Discovery · React",
    desc: "A movie discovery application where users can explore movies and TV shows and find information about their favorite titles.",
    stack: ["React", "JavaScript", "TVMaze API", "CSS"],
    color: "project-purple",
    image: "/image/movie.png",
    url: "https://movie-explorer-gules-one.vercel.app",
  },
  {
    no: "03",
    title: "University Management System",
    type: "Academic Platform · Full Stack",
    desc: "A university management platform designed to organize students, instructors, academic programs, and administrative workflows.",
    stack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma"],
    color: "project-teal",
    image: "/image/university.png",
    url: "https://university-management-system-fronte-lovat.vercel.app",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="section-wrap content-section">
      <Reveal>
        <div className="section-kicker">
          <span>02 / SELECTED WORK</span>
          <i />
        </div>

        <div className="section-heading-row">
          <h2>
            Things I’ve <span className="gradient-text">built.</span>
          </h2>

          <p>
            A selection of projects from my
            <br />
            learning journey and development work.
          </p>
        </div>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, i) => (
          <Reveal
            key={project.no}
            delay={i * 0.1}
            className="project-card"
          >
            <a
              href={project.url}
              className={`project-art ${project.color}`}
              aria-label={`View ${project.title} projec`}
            >
              <img
                src={project.image}
                alt={`${project.title} website screenshot`}
                className="project-image"
                loading="lazy"
              />

              <span className="project-art-label">
                {project.type}
              </span>

              <span className="project-open">
                <ArrowUpRight size={20} />
              </span>
            </a>

            <div className="project-info">
              <div>
                <span className="project-no">
                  PROJECT {project.no}
                </span>

                <h3>{project.title}</h3>
              </div>

              <p>{project.desc}</p>

              <div className="tag-list">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a className="text-link" href={project.url}>
                VIEW PROJECT <ExternalLink size={14} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
