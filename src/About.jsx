import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p className="about-intro">
          We're passionate about creating innovative solutions that make a difference
        </p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals and businesses through cutting-edge 
            technology and exceptional user experiences. We believe in creating products 
            that are not only functional but also delightful to use.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, we started with a simple idea: to make web development 
            more accessible and enjoyable for everyone. Since then, we've grown into 
            a team of dedicated professionals committed to excellence.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries and exploring new possibilities</p>
            </div>
            <div className="value-item">
              <h3>Quality</h3>
              <p>Delivering excellence in every project we undertake</p>
            </div>
            <div className="value-item">
              <h3>Collaboration</h3>
              <p>Working together to achieve extraordinary results</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>Being honest, transparent, and ethical in all we do</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            We're a diverse group of designers, developers, and thinkers who share 
            a common goal: creating products that people love. Each team member brings 
            unique skills and perspectives that make our work truly special.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
