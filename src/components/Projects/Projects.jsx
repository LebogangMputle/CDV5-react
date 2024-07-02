// import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div id='project-1' className='project-card'>
          <ul>
            <li>Podcast App</li>
          </ul>
        </div>
        <div id='project-2' className='project-card'>
          <ul>
            <li>Legacy-Redefined</li>
          </ul>
        </div>
        <div id='project-3' className='project-card'>
          <ul>
            <li>Project 3 goes here</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
