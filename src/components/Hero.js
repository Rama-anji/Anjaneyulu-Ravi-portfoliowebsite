import React from "react";
import avatar from "../assets/ravi-anjaneyulu.jpg";
import resume from "../assets/Anjaneyulu-resume.pdf";
import "../App.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>👋 Hi, I’m Anjaneyulu Ravi</h1>
          <h2>Building Scalable & User-Centric Web Apps</h2>
          <p>
            I’m a dedicated Full Stack Developer with hands-on experience in building 
            responsive and dynamic web applications using React, Node.js, Express, 
            MongoDB, and PHP. I focus on creating impactful user and admin dashboards.
          </p>
          <div className="hero-buttons">
            <a href="#projects">
              <button className="outline-btn">View My Work</button>
            </a>
            <a href={resume} download>
              <button className="filled-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={avatar}
            alt="Anjaneyulu Ravi - Full Stack Developer"
            className="floating"
          />
          <div className="tech-icons" aria-label="Technology stack icons">
            <span title="React">⚛️</span>
            <span title="Node.js">💻</span>
            <span title="MongoDB">🌐</span>
            <span title="Express.js">📦</span>
          </div>
        </div>
      </section>

      <section className="profile-boxes">
        <div className="box">
          <h3>Experience</h3>
          <p>1.8+ years working on real-time full stack web projects.</p>
        </div>
        <div className="box">
          <h3>Skills</h3>
          <p>
            React, Node.js, Express.js, MongoDB, JavaScript, PHP, CodeIgniter, 
            MySQL, HTML5, CSS3, Bootstrap, REST APIs
          </p>
        </div>
        <div className="box">
          <h3>Projects</h3>
          <p>
            Completed 3+ major live projects including job portals and booking platforms.
          </p>
        </div>
        <div className="box">
          <h3>Education</h3>
          <p>Bachelor's Degree in Mechanical Engineering</p>
        </div>
      </section>
    </>
  );
}

export default Hero;
