"use client";

import Reveal from "@/components/ui/Reveal";

export default function Certificates() {
  return (
    <section id="certifications" className="section-wrap content-section certifications-section">
        <Reveal><div className="section-kicker"><span>05 / LEARNING & ACHIEVEMENTS</span><i/></div><div className="section-heading-row"><h2>Professional <span className="gradient-text">certifications.</span></h2><p>Recognizing the skills I’ve built<br/>through training and practice.</p></div></Reveal>
        <div className="certification-grid">
          <Reveal className="certification-card" delay={0.05}>
            <div className="certification-top"><span className="certification-seal">Govt.</span></div>
            <h3>National Skills Certificate</h3>
            <p className="certification-course">Web Design &amp; Development <span>|</span> NSDA Level 3</p>
            <div className="certificate-image"><img src="/image/web.png" alt="Web Design and Development certificate" onError={(e) => { e.currentTarget.style.display = "none"; }} /><span>ADD CERTIFICATE IMAGE</span></div>
        
          </Reveal>
          <Reveal className="certification-card" delay={0.14}>
            <div className="certification-top"><span className="certification-seal">Govt.</span></div>
            <h3>National Skills Certificate</h3>
            <p className="certification-course">Digital Marketing for Freelancing, Level- 3</p>
            <div className="certificate-image"><img src="/image/digital.png" alt="Digital Marketing certificate" onError={(e) => { e.currentTarget.style.display = "none"; }} /><span>ADD CERTIFICATE IMAGE</span></div>
        
          </Reveal>
        </div>
      </section>
  );
}
