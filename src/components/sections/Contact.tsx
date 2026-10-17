
"use client";

import { ArrowUpRight, Github, Linkedin, Mail, Globe, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    window.location.href =
      `mailto:info.sakibulamin@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="section-wrap content-section contact-section">
      <Reveal>
        <div className="section-kicker">
          <span>06 / GET IN TOUCH</span>
          <i />
        </div>
        <h2>
          Have an idea?<br />
          <span className="gradient-text">Let’s make it real.</span>
        </h2>
        <p className="contact-intro">
          Have a project in mind or just want to say hello? My inbox is always open.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-details">
          <a href="mailto:info.sakibulamin@gmail.com" className="contact-item">
            <span><Mail size={19} /></span>
            <div>
              <small>EMAIL ME</small>
              <b>info.sakibulamin.@gmail.com</b>
            </div>
            <ArrowUpRight size={17} />
          </a>

          <div className="contact-item">
            <span><Globe size={19} /></span>
            <div>
              <small>LOCATION</small>
              <b>Dhaka, Bangladesh</b>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/sakibulamin" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/sakibul-amin7" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="contact-form-wrap">
          <form onSubmit={handleSubmit}>
            <label>
              Your name
              <input name="name" placeholder="Enter your name" required />
            </label>

            <label>
              Your email
              <input name="email" type="email" placeholder="Enter your email" required />
            </label>

            <label>
              Your message
              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                rows={4}
                required
              />
            </label>

            <button className="button button-primary" type="submit">
              SEND A MESSAGE <Send size={16} />
            </button>

            <small className="form-note">This opens your default email app.</small>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
