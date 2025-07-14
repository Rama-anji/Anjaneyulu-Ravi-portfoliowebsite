import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="mailto:anjaneyuluravi64@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/anjaneyulu-ravi-058076220" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Rama-anji" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Anjaneyulu Ravi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
