import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'; // Import brand icons

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <div className="social-links">
          <a href="https://github.com/Sorrow02" target="_blank" rel="noreferrer" className="social-card">
            <FaGithub size={30} color="#a855f7" />
            <h3>GitHub</h3>
            <span>My Codes</span>
          </a>
          <a href="https://www.linkedin.com/in/wael-telghamti-269427404/" target="_blank" rel="noreferrer" className="social-card">
            <FaLinkedin size={30} color="#a855f7" />
            <h3>LinkedIn</h3>
            <span>My Profile</span>
          </a>
          <a href="https://x.com/Wael_TL0" target="_blank" rel="noreferrer" className="social-card">
            <FaXTwitter size={30} color="#a855f7" />
            <h3>X / Twitter</h3>
            <span>My Thoughts</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;