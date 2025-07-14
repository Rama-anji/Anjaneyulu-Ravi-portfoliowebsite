// src/components/Contact.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../App.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    let tempErrors = {};
    const nameRegex = /^[A-Za-z ]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      tempErrors.name = "Name must be at least 3 characters and only alphabets";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs.send(
      "service_61dug2u",       // replace this
      "template_lk7egqh",      // replace this
      formData,
      "yIB48Kocc4jW_SWb1"        // replace this
    ).then(() => {
      setSuccessMsg("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }).catch((error) => {
      console.error("Failed to send:", error);
      setSuccessMsg("Failed to send. Try again later.");
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-sub">Open to freelance, collaboration or full-time roles.</p>
      <div className="contact-layout">
        <div className="contact-info">
          <p><FaEnvelope /> anjaneyuluravi64@gmail.com</p>
          <p><FaPhone /> +91 6301932501</p>
          <p><FaLinkedin /> <a href="https://www.linkedin.com/in/anjaneyulu-ravi-058076220" target="_blank" rel="noreferrer">linkedin.com/in/anjaneyulu-ravi</a></p>
          <p><FaGithub /> <a href="https://github.com/Rama-anji" target="_blank" rel="noreferrer">github.com/Rama-anji</a></p>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            rows="4"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">SUBMIT</button>
          {successMsg && <p className="success">{successMsg}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
