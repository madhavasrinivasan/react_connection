import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to MyApp</h1>
        <p className="hero-subtitle">Building amazing web experiences with React</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>⚡ Fast Performance</h3>
            <p>Lightning-fast loading times and smooth interactions</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive Design</h3>
            <p>Looks great on all devices, from mobile to desktop</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Modern UI</h3>
            <p>Clean and intuitive user interface design</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure</h3>
            <p>Built with security best practices in mind</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users already using our platform</p>
        <button className="cta-button-secondary">Learn More</button>
      </section>
    </div>
  );
}

export default Home;
