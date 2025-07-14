import React, { useState } from "react";
import "../App.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">Anjaneyulu Ravi</div>

      <nav className={`navbar-center ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#about" onClick={toggleMenu}>About Me</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>

      <button className="hire-button">Hire Me</button>

<div className="hamburger-container">
  {isMobileMenuOpen ? (
    <div className="close-icon" onClick={toggleMenu}>
      &times;
    </div>
  ) : (
    <div className="hamburger" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  )}
</div>

    </header>
  );
}

export default Navbar;
