import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>John Doe</h1>
        <p>Full Stack MERN Developer</p>
      </header>

      <section className="about-me">
        <h2>About Me</h2>
        <p>I am a passionate MERN stack developer with experience in building scalable web applications.</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React</li>
          <li>Node.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML &amp; CSS</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - E-commerce Website</li>
          <li>Project 2 - Social Media App</li>
          <li>Project 3 - Task Management Tool</li>
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
