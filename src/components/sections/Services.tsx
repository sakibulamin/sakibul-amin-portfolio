"use client";

import { Code2, Globe, Layers3, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const services = [
  { n: "01", icon: Code2, title: "Frontend Development", text: "Responsive, accessible interfaces built with React, Next.js, and modern CSS.", tags: ["React", "Next.js", "Tailwind CSS"] },
  { n: "02", icon: Globe, title: "WordPress Development", text: "Fast, easy-to-manage websites, landing pages, and online stores tailored to your goals.", tags: ["WordPress", "Elementor", "WooCommerce"] },
  { n: "03", icon: Layers3, title: "UI / Web Design", text: "Clean layouts and thoughtful user experiences that make your brand feel memorable.", tags: ["Figma", "Responsive UI", "UX"] },
];

export default function Services() {
  return (
    <section id="services" className="section-wrap content-section">
        <Reveal><div className="section-kicker"><span>04 / WHAT I OFFER</span><i/></div><div className="section-heading-row"><h2>Ideas into <span className="gradient-text">solutions.</span></h2><p>Thoughtful design. Clean code.<br/>Digital experiences made to work.</p></div></Reveal>
        <div className="service-grid">{services.map((service, i) => { const Icon = service.icon; return <Reveal key={service.n} delay={i * 0.1} className="service-card"><div className="service-card-top"><span className="service-icon"><Icon size={21}/></span><span className="card-number">{service.n}</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="tag-list">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="card-arrow" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={19}/></a></Reveal> })}</div>
      </section>
  );
}
