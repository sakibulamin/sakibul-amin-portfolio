"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

import About from "@/components/sections/About";

import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
