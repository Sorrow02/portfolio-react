import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TLWael</div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500} offset={-70}><FaHome /> Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-70}><FaUser /> About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-70}><FaCode /> Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-70}><FaEnvelope /> Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;