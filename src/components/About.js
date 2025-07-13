import React from "react";
import "../App.css";
import aboutImg from "../assets/ravi-anjaneyulu.jpg"; // Use your cartoon image path

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-img">
        <img src={aboutImg} alt="About Illustration" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Anjaneyulu Ravi, a dedicated Full Stack Developer experienced in building scalable web applications. My core strength lies in MERN stack technologies.
        </p>
        <p>
          I began my journey at Infosys as a Systems Engineer, learning RDBMS, Power BI, and MongoDB. Later, I joined BSIT Software Services, where I worked extensively with React, Node.js, PHP, CodeIgniter, and built real-time applications such as job portals and booking systems.
        </p>
      </div>
    </section>
  );
}

export default About;