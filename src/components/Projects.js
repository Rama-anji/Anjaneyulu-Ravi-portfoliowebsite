import React, { useEffect, useRef } from "react";
import "../App.css";
import bsitImg1 from "../assets/careersarbsit1.png";
import bsitImg2 from "../assets/careersarbsit2.png";
import hostelImg1 from "../assets/fmh1.png";
import hostelImg2 from "../assets/fmh2.png";
import rklegal1 from "../assets/rklegal1.png";
import rklegal2 from "../assets/rklegal2.png";

function Projects() {
  // Refs for scrollable divs
  const bsitRef = useRef();
  const hostelRef = useRef();
  const rklegalRef = useRef();

  // Auto scroll function
  const setupAutoScroll = (ref) => {
    let index = 0;
    const interval = setInterval(() => {
      const container = ref.current;
      if (!container) return;
      index = (index + 1) % container.children.length;
      container.scrollTo({
        left: container.children[index].offsetLeft,
        behavior: "smooth",
      });
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  };

  useEffect(() => {
    const clear1 = setupAutoScroll(bsitRef);
    const clear2 = setupAutoScroll(hostelRef);
    const clear3 = setupAutoScroll(rklegalRef);
    return () => {
      clear1();
      clear2();
      clear3();
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>Recent Projects</h2>
      <p className="projects-sub">
        From concept to deployment, these projects showcase my technical expertise.
      </p>

      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div className="image-scroll" ref={bsitRef}>
            <img src={bsitImg1} alt="BSIT Project 1" />
            <img src={bsitImg2} alt="BSIT Project 2" />
          </div>
          <div className="content">
            <h3>Careers at BSIT</h3>
            <p>Full-stack job portal: apply, resume upload, tracking, admin module.</p>
            <a
              href="https://careers.bsitsoftware.com/"
              target="_blank"
              rel="noreferrer"
              className="visit-btn"
            >
              Visit Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="image-scroll" ref={hostelRef}>
            <img src={hostelImg1} alt="Hostel Project 1" />
            <img src={hostelImg2} alt="Hostel Project 2" />
          </div>
          <div className="content">
            <h3>Find Your Hostel</h3>
            <p>Platform with User/Agent modules, hostel CRUD, filters, wishlist.</p>
            <a
              href="https://www.bsitsoftware.com/FindMyHostel"
              target="_blank"
              rel="noreferrer"
              className="visit-btn"
            >
              Visit Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="image-scroll" ref={rklegalRef}>
            <img src={rklegal1} alt="RK Legal Project 1" />
            <img src={rklegal2} alt="RK Legal Project 2" />
          </div>
          <div className="content">
            <h3>RK Legal Associates</h3>
            <p>Static site with Home, About, Services, Blog & Contact pages.</p>
            <a
              href="https://www.rklegalassociates.in/"
              target="_blank"
              rel="noreferrer"
              className="visit-btn"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;