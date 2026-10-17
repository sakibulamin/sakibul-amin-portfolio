"use client";

import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const skillCategories = [
  { title: "Languages", skills: ["TypeScript", "JavaScript (ES6+)", "SQL", "HTML5 / CSS3"] },
  { title: "Frontend", skills: ["Next.js (App Router)", "React.js", "Tailwind CSS", "Shadcn UI"] },
  { title: "Backend & ORM", skills: ["Node.js", "Express.js", "Prisma ORM", "REST APIs"] },
  { title: "Database & Tools", skills: ["PostgreSQL", "Git & GitHub", "Docker"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrap content-section skills-section">
        <Reveal><div className="section-kicker"><span>03 / MY TOOLKIT</span><i/></div><div className="section-heading-row"><h2>Tools of the <span className="gradient-text">trade.</span></h2><p>Curiosity is my favourite tool.<br/>These are the others I use.</p></div></Reveal>
        <Reveal delay={0.1} className="skills-panel"><div className="skills-intro"><span className="skills-icon"><Code2 size={24}/></span><div><h3>Technologies & tools</h3><p>Growing my skills one project at a time.</p></div></div><div className="skill-category-grid">{skillCategories.map((category, i) => <motion.div key={category.title} className="skill-category" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><h4>{category.title}</h4><ul>{category.skills.map(skill => <li key={skill}><span>▹</span>{skill}</li>)}</ul></motion.div>)}</div><div className="skills-note"><span className="status-dot"/> CURRENTLY EXPLORING <b>Advanced React · TypeScript · Backend fundamentals</b></div></Reveal>
      </section>
  );
}
