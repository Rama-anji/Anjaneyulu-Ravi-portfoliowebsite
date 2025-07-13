import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
