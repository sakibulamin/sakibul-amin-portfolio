
"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Services",
  "Certifications",
  "Contact",
];


type Theme = "dark" | "light";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const initialTheme: Theme =
      savedTheme === "light" ? "light" : "dark";

    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Detect active section



  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "projects",
      "skills",
      "services",
      "certifications",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  function toggleTheme() {
    const nextTheme: Theme =
      theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  function handleNavClick(section: string) {
    setActiveSection(section);
    setMenuOpen(false);
  }

  return (
    <header className="topbar">
      <a
        className="brand"
        href="#home"
        aria-label="Sakibul Amin home"
        onClick={() => handleNavClick("home")}
      >
        <span className="brand-mark">
          <img src="/image/sakib.png" alt="Sakibul Amin" />
        </span>

        <span className="brand-copy">
          SAKIBUL AMIN
          <small>FULL-STACK DEVELOPER</small>
        </span>
      </a>

      <nav
        className={menuOpen ? "nav nav-open" : "nav"}
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const id =
            item === "Home" ? "home" : item.toLowerCase();

          const isActive = activeSection === id;

          return (
            <a
              key={item}
              href={`#${id}`}
              className={isActive ? "active" : ""}
              aria-current={isActive ? "location" : undefined}
              onClick={() => handleNavClick(id)}
            >
              {item}
            </a>
          );
        })}
      </nav>

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          disabled={!mounted}
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <Sun size={19} />
          ) : (
            <Moon size={19} />
          )}
        </button>

        <a
          className="nav-cta"
          href="#contact"
          onClick={() => handleNavClick("contact")}
        >
          LET’S TALK <ArrowUpRight size={15} />
        </a>
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
