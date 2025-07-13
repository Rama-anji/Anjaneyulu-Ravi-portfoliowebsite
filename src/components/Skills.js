import React, { useState } from "react";
import "../App.css";

const skillsData = {
  frontend: [
    {
      name: "React",
      icon: "devicon-react-original colored",
      proficiency: 80,
      description:
        "Built interactive UIs using components, state, props, and hooks. Applied in career site and hostel project frontend.",
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain colored",
      proficiency: 85,
      description:
        "Used ES6+ for client-side logic, DOM manipulation, API calls, and form validations across real-time apps.",
    },
    {
      name: "HTML5",
      icon: "devicon-html5-plain colored",
      proficiency: 90,
      description:
        "Structured pages semantically with HTML5 ensuring accessibility, responsiveness, and SEO compliance in production apps.",
    },
    {
      name: "CSS3",
      icon: "devicon-css3-plain colored",
      proficiency: 90,
      description:
        "Styled interfaces using Flexbox, Grid, transitions, and animations for clean and responsive designs.",
    },
    {
      name: "Bootstrap",
      icon: "devicon-bootstrap-plain colored",
      proficiency: 95,
      description:
        "Used Bootstrap to create responsive UIs quickly using prebuilt components, utilities, and mobile-first layouts.",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "devicon-nodejs-plain colored",
      proficiency: 90,
      description:
        "Handled backend logic and built REST APIs using Node.js in job portal and hostel projects.",
    },
    {
      name: "Express.js",
      icon: "devicon-express-original",
      proficiency: 90,
      description:
        "Created server-side routes, middleware, and authentication flows using Express.js for scalable APIs.",
    },
    {
      name: "PHP",
      icon: "devicon-php-plain colored",
      proficiency: 90,
      description:
        "Built dynamic backend forms and validation logic in CodeIgniter job portal and admin modules.",
    },
    {
      name: "CodeIgniter",
      icon: "devicon-codeigniter-plain colored",
      proficiency: 90,
      description:
        "Worked on CodeIgniter 3 to create MVC-based apps for careers and user management dashboards.",
    },
    {
      name: "MySQL",
      icon: "devicon-mysql-plain colored",
      proficiency: 100,
      description:
        "Managed relational data, joins, and queries using MySQL for storing user data and job details.",
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain colored",
      proficiency: 85,
      description:
        "Used MongoDB for document-based storage in MERN stack projects with Mongoose models.",
    },
    {
      name: "REST APIs",
      icon: "devicon-fastapi-plain colored", // closest suitable devicon
      proficiency: 85,
      description:
        "Built and consumed REST APIs for job filtering, user login, and CRUD operations.",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "devicon-git-plain colored",
      proficiency: 90,
      description:
        "Used Git for version control, branching, and pushing code during solo and team projects.",
    },
    {
      name: "GitHub",
      icon: "devicon-github-original colored",
      proficiency: 90,
      description:
        "Managed repositories, commits, and deployments via GitHub. Showcased projects like career site and hostel finder.",
    },
    {
      name: "VS Code",
      icon: "devicon-vscode-plain colored",
      proficiency: 100,
      description:
        "Developed and debugged apps in VS Code using extensions, terminal, and Git integration.",
    },
    {
      name: "Postman",
      icon: "📨",
      proficiency: 95,
      description:
        "Used Postman to test and debug REST APIs with different methods and headers in real-time projects.",
    },
    {
      name: "Power BI",
      icon: "📊",
      proficiency: 80,
      description:
        "Created data dashboards and charts in Power BI during training to visualize business insights effectively.",
    },
  ],
};

function Skills() {
  const [selected, setSelected] = useState("frontend");

  return (
    <section id="skills" className="skills-section">
      <h2 className="text-col">Technical Proficiency</h2>
      <p>
        Below are the technologies and tools I’ve used across frontend,
        backend, and dev environments while building full-stack applications.
      </p>

      <div className="skill-buttons">
        <button
          className={selected === "frontend" ? "active" : ""}
          onClick={() => setSelected("frontend")}
        >
          Frontend
        </button>
        <button
          className={selected === "backend" ? "active" : ""}
          onClick={() => setSelected("backend")}
        >
          Backend
        </button>
        <button
          className={selected === "tools" ? "active" : ""}
          onClick={() => setSelected("tools")}
        >
          Tools & Skills
        </button>
      </div>

      <div className="skills-grid">
        {skillsData[selected].map((skill) => (
          <div key={skill.name} className="skill-box">
            <div className="skill-box-header">
              <div className="skill-icon">
                {skill.icon.startsWith("devicon-") ? (
                  <i className={skill.icon}></i>
                ) : (
                  <span style={{ fontSize: "2rem" }}>{skill.icon}</span>
                )}
              </div>
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <small>{skill.proficiency}%</small>
              </div>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
            <div className="skill-description">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
