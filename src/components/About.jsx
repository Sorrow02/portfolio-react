import React from 'react';
import { 
  FaReact, 
  FaPhp, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython,
  FaJava,
  FaPalette // Using this instead of the Adobe one
} from 'react-icons/fa';
import { SiKotlin, SiMysql } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Kotlin", icon: <SiKotlin color="#7F52FF" /> },
    { name: "PHP", icon: <FaPhp color="#777BB4" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "After Effects", icon: <FaPalette color="#CF96FD" /> } 
  ];

  return (
    <section id="about" className="section">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-text">
  <div className="about-text">
  <p>
    Right now, I'm a CS student diving deep into full-stack development. 
    I'm the kind of person who stays up late just to figure out why a 
    single line of PHP isn't talking to my database or why a UI button 
    isn't the perfect shade of purple.
  </p>
  <p>
    I don't just stick to one thing—I've built everything from simple 
    calculators for class to Android apps in Kotlin. I also have a 
    huge interest in video editing and UI customization; I think 
    software should look just as good as the code behind it.
  </p>
  <p>
    Down below are the main tools I use to bring my ideas to life.
  </p>
</div>
</div>
        
        <h3 className="skills-title">My Tech Stack</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;