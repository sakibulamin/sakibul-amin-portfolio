
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Bolt,
  Github,
  Linkedin,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPrisma,
  SiExpress,
} from "react-icons/si";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Web Designer",
  "WordPress Developer",
];

type Theme = "light" | "dark";

export default function Hero() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  // Sync Hero with Navbar theme
  useEffect(() => {
    const updateTheme = () => {
      setTheme(
        document.documentElement.dataset.theme === "light"
          ? "light"
          : "dark",
      );
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Animated typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const delay = isDeleting
      ? 45
      : displayedRole === currentRole
        ? 1400
        : 85;

    const timer = window.setTimeout(() => {
      if (!isDeleting && displayedRole === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      } else {
        setDisplayedRole(
          currentRole.substring(
            0,
            displayedRole.length + (isDeleting ? -1 : 1),
          ),
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [roleIndex, displayedRole, isDeleting]);

  const isLight = theme === "light";

  const mutedText = isLight
    ? "text-slate-600"
    : "text-gray-400";

  const secondaryText = isLight
    ? "text-slate-800"
    : "text-gray-200";

  const subtleText = isLight
    ? "text-slate-500"
    : "text-gray-500";

  const glassCard = isLight
    ? "border-slate-200 bg-white/80 shadow-lg shadow-slate-200/40"
    : "border-white/10 bg-white/[0.04]";

  const iconCard = isLight
    ? "border-slate-200 bg-white/95 shadow-lg shadow-slate-200/40"
    : "border-white/10 bg-[#111827]/95";

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 transition-colors duration-500 sm:px-6 lg:px-8 ${isLight
          ? "bg-gradient-to-br from-slate-50 via-white to-violet-50 text-slate-900"
          : "bg-gradient-to-br from-[#020617] via-[#090d16] to-[#01040d] text-white"
        }`}
    >
      {/* Ambient background glows */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] transition-colors duration-500 sm:h-[600px] sm:w-[900px] ${isLight ? "bg-purple-400/15" : "bg-purple-600/10"
          }`}
      />

      <div
        className={`pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full blur-[170px] ${isLight ? "bg-cyan-400/15" : "bg-cyan-500/10"
          }`}
      />

      <div
        className={`pointer-events-none absolute left-0 top-20 h-[350px] w-[350px] rounded-full blur-[150px] ${isLight ? "bg-indigo-400/10" : "bg-indigo-600/10"
          }`}
      />

      {/* Background watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center overflow-hidden">
        <span
          className={`-translate-y-8 whitespace-nowrap text-[22vw] font-black tracking-tighter transition-colors duration-500 sm:text-[18vw] lg:text-[15vw] ${isLight ? "text-slate-900/[0.035]" : "text-white/[0.025]"
            }`}
        >
          DEVELOPER
        </span>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 min-w-0 text-center lg:order-1 lg:text-left"
        >
          {/* Availability badge */}
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-md transition-colors duration-300 ${isLight
                ? "border-emerald-200 bg-white/85 shadow-sm"
                : "border-white/10 bg-white/5"
              }`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span
              className={`text-[10px] tracking-[0.15em] sm:text-xs ${isLight ? "text-slate-600" : "text-gray-300"
                }`}
            >
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Welcome pill */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`mb-6 flex w-fit items-center gap-3 rounded-full border px-4 py-2.5 text-sm shadow-lg backdrop-blur-md transition-colors duration-300 sm:text-base max-lg:mx-auto ${isLight
                ? "border-violet-200 bg-white/90 shadow-violet-100"
                : "border-white/10 bg-white/5"
              }`}
          >
            <Sparkles className="h-4 w-4 shrink-0 animate-pulse text-purple-500" />

            <span className={isLight ? "text-slate-700 text-2xl " : "text-gray-200 text-2xl tracking-tighter Helvetica"}>
              Hey! I&apos;m{" "}
              <strong className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-bold text-transparent">
                Sakibul Amin
              </strong>
            </span>
            
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`mb-6 flex w-fit items-center gap-3 rounded-full border px-4 py-2.5 text-sm shadow-lg backdrop-blur-md transition-colors duration-300 sm:text-base max-lg:mx-auto ${isLight
                ? "border-violet-200 bg-white/90 shadow-violet-100"
                : "border-white/10 bg-white/5"
              }`}
          >
          
          <Zap className="h-4 w-4 shrink-0 animate-pulse text-blue-400"/>

            
            <span className={isLight ? "text-slate-700" : "text-gray-200"}>
            
              <strong className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-200  bg-clip-text font-bold text-transparent">
              Full-Stack Developer
              </strong>
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className={`text-4xl font-bold leading-[1.15] tracking-tight transition-colors duration-300 sm:text-5xl md:text-6xl xl:text-7xl ${isLight ? "text-slate-900" : "text-white"
              }`}
          >
            I turn ideas into{" "}
            <span
              className={`bg-clip-text text-transparent ${isLight
                  ? "bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600"
                  : "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                }`}
            >
              digital
              <br className="hidden sm:block" /> experiences.
            </span>
          </motion.h1>

          {/* Animated role */}
          <div className="mt-6 min-h-9">
            <span
              className={`bg-clip-text text-lg font-semibold tracking-wide text-transparent sm:text-xl md:text-2xl ${isLight
                  ? "bg-gradient-to-r from-cyan-700 via-purple-700 to-pink-600"
                  : "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                }`}
            >
              {displayedRole}
            </span>
            <span
              className={`ml-1 animate-pulse ${isLight ? "text-purple-600" : "text-white"
                }`}
            >
              |
            </span>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`mx-auto mt-5 max-w-xl text-sm leading-7 transition-colors duration-300 sm:text-base lg:mx-0 ${mutedText}`}
          >
            I design and build modern websites that look great, feel intuitive,
            and help businesses move forward with creative design and reliable
            web experiences.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-purple-400/30 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.25)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">VIEW MY WORK</span>
              <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#about"
              className={`group flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-4 text-sm font-medium transition duration-300 sm:w-auto ${isLight
                  ? "border-slate-300 bg-white/80 text-slate-700 hover:border-purple-300 hover:bg-white hover:text-purple-700"
                  : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-purple-400/40 hover:bg-white/[0.06] hover:text-white"
                }`}
            >
              DISCOVER MORE
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </motion.div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
            <a
              href="https://github.com/sakibulamin"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-1 ${isLight
                  ? "border-slate-200 bg-white text-slate-600 hover:border-purple-300 hover:text-purple-700"
                  : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-purple-400/40 hover:text-white"
                }`}
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/sakibul-amin7"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-1 ${isLight
                  ? "border-slate-200 bg-white text-slate-600 hover:border-purple-300 hover:text-purple-700"
                  : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-purple-400/40 hover:text-white"
                }`}
            >
              <Linkedin size={18} />
            </a>

            <span
              className={`h-px w-10 ${isLight ? "bg-slate-300" : "bg-white/20"
                }`}
            />

            <span
              className={`text-[10px] tracking-[0.15em] sm:text-xs ${subtleText}`}
            >
              BASED IN BANGLADESH
            </span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 flex min-w-0 flex-col items-center justify-center lg:order-2"
        >
          <div className="relative flex w-full max-w-[580px] items-center justify-center pt-5 sm:pt-8">
            {/* Outer ring */}
            <div
              className={`absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-500 ${isLight
                  ? "border-violet-300/60 shadow-[0_0_60px_rgba(139,92,246,0.12)]"
                  : "border-white/[0.08] shadow-[0_0_60px_rgba(139,92,246,0.08)]"
                }`}
            />

            {/* Middle ring */}
            <div
              className={`absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-sm transition-colors duration-500 ${isLight
                  ? "border-purple-300/60 bg-gradient-to-br from-white/70 to-violet-100/30 shadow-[inset_0_0_40px_rgba(139,92,246,0.08),0_0_50px_rgba(139,92,246,0.08)]"
                  : "border-purple-400/20 bg-gradient-to-br from-white/[0.05] to-transparent shadow-[inset_0_0_40px_rgba(139,92,246,0.1),0_0_50px_rgba(139,92,246,0.1)]"
                }`}
            />

            {/* Inner ring */}
            <div
              className={`absolute left-1/2 top-1/2 aspect-square w-[61%] -translate-x-1/2 -translate-y-1/2 rounded-full border ${isLight
                  ? "border-cyan-500/30 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
                  : "border-cyan-400/20 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
                }`}
            />

            {/* Orbiting technology icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {/* React */}
              <div
                className={`absolute left-1/2 top-[2%] flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-2xl border text-cyan-500 shadow-lg shadow-cyan-500/10 sm:h-14 sm:w-14 ${iconCard}`}
              >
                <FaReact size={26} />
              </div>

              {/* Next.js */}
              <div
                className={`absolute right-[1%] top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border shadow-lg sm:h-14 sm:w-14 ${isLight
                    ? "border-slate-200 bg-white/95 text-slate-900"
                    : "border-white/10 bg-[#111827]/95 text-white"
                  }`}
              >
                <SiNextdotjs size={25} />
              </div>

              {/* Prisma */}
              <div
                className={`absolute bottom-[2%] left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-2xl border text-emerald-500 shadow-lg shadow-emerald-500/10 sm:h-14 sm:w-14 ${iconCard}`}
              >
                <SiPrisma size={25} />
              </div>

              {/* Express.js */}
              <div
                className={`absolute left-[1%] top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl border shadow-lg sm:h-14 sm:w-14 ${isLight
                    ? "border-slate-200 bg-white/95 text-slate-800"
                    : "border-white/15 bg-[#111827]/95 text-white"
                  }`}
              >
                <SiExpress size={25} />
              </div>
            </motion.div>

            {/* Profile image */}
            <div className="relative z-10 w-[74%] max-w-[400px]">
              <div
                className={`absolute inset-5 rounded-full blur-3xl ${isLight
                    ? "bg-gradient-to-br from-purple-400/25 via-blue-400/20 to-cyan-300/25"
                    : "bg-gradient-to-br from-purple-600/30 via-blue-500/20 to-cyan-400/20"
                  }`}
              />

              <div
                className={`relative overflow-hidden rounded-2xl transition-colors duration-500 ${isLight ? "bg-transparent" : "bg-transparent"
                  }`}
              >
                {!imageFailed ? (
                  <img
                    src="/image/profile-hero.png"
                    alt="Sakibul Amin"
                    className="relative z-10 h-auto w-full object-contain"
                    onError={() => setImageFailed(true)}
                  />
                ) : (
                  <div
                    className={`flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border ${isLight
                        ? "border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50"
                        : "border-purple-400/20 bg-gradient-to-br from-[#11152b] via-[#15152d] to-[#061322]"
                      }`}
                  >
                    <span
                      className={`bg-clip-text text-7xl font-black text-transparent sm:text-8xl ${isLight
                          ? "bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600"
                          : "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                        }`}
                    >
                      SA
                    </span>
                    <span className={`mt-3 text-[10px] tracking-[0.2em] ${subtleText}`}>
                      SAKIBUL AMIN
                    </span>
                  </div>
                )}

                {/* Bottom image gradient */}
                <div
                  className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t ${isLight
                      ? "from-white/80 via-white/20 to-transparent"
                      : "from-[#020617] via-[#020617]/30 to-transparent"
                    }`}
                />
              </div>
            </div>
          </div>

          {/* Availability card */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className={`relative z-20 mt-4 flex w-[90%] max-w-[360px] items-center gap-3 rounded-xl border p-3 backdrop-blur-xl transition-colors duration-300 sm:p-4 ${glassCard}`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${isLight
                  ? "border-purple-200 bg-purple-50 text-purple-600"
                  : "border-purple-400/20 bg-purple-500/10 text-purple-300"
                }`}
            >
              <Sparkles size={18} />
            </span>

            <span className="min-w-0 flex-1">
              <span className={`block text-sm font-semibold ${secondaryText}`}>
                Let&apos;s build something
              </span>
              <span className={`mt-1 block text-xs ${subtleText}`}>
                Good things start with an idea.
              </span>
            </span>

            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className={`absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 transition sm:flex ${isLight
            ? "text-slate-500 hover:text-purple-700"
            : "text-gray-500 hover:text-white"
          }`}
      >
        <span className="text-[9px] tracking-[0.22em]">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  );
}
