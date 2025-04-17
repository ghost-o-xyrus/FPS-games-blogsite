import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About FPS Gaming Hub</h1>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>Your mission statement will go here.</p>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          {/* Team members will be mapped here */}
        </div>
      </section>
    </div>
  );
};

export default About; 