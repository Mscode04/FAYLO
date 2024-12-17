import React from 'react';
import '../App.css'; // Import custom CSS for the About page

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About the App</h1>
        <p>
          This app provides a detailed analysis of Instagram profiles. It gives insights into the profile's statistics and
          interactions, helping users to analyze their Instagram presence and growth over time.
        </p>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Profile Insights</h3>
            <p>Get detailed insights on followers, engagement, and post-performance.</p>
          </div>
          <div className="feature-card">
            <h3>Growth Analytics</h3>
            <p>Track your profile's growth over time with interactive graphs and data.</p>
          </div>
          <div className="feature-card">
            <h3>Suggestions</h3>
            <p>Receive personalized suggestions to increase engagement and followers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
