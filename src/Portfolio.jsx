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
        <p>
          I am a passionate MERN stack developer with experience in building scalable web applications.
          I enjoy creating efficient and user-friendly web solutions.
        </p>
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
          <li>
            <strong>E-commerce Website:</strong> Developed a full-featured e-commerce platform with user authentication, product catalog, and payment integration.
          </li>
          <li>
            <strong>Social Media App:</strong> Built a social networking app with real-time chat, posts, and friend connections.
          </li>
          <li>
            <strong>Task Management Tool:</strong> Created a task management tool with drag-and-drop functionality and deadline reminders.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
