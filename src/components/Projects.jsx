import React from 'react';
import imgone from '../assets/Project1.png';
import imgtwo from '../assets/Project2.png';

const Projects = () => {
  const projectList = [
    {
      title: "Archimed Website",
      description: "A website for the college I studied in, focused on easy navigation and student resources.",
      image: imgone,
      tags: ["HTML", "CSS", "BOOTSTRAP"] 
    },
    {
      title: "Tic Tac Toe Game",
      description: "A fast-paced classic game built to practice logic and state management.",
      image: imgtwo,
      tags: ["HTML", "CSS","JavaScript"]
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="project-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag-badge">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;