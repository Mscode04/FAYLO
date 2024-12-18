import React from "react";
import '../App.css'; // Import the CSS file
import { FaUsers, FaChartPie, FaPhoneAlt, FaGlobe } from "react-icons/fa"; // Import icons from Font Awesome

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Faylo</h1>
        <p>Analyzing Instagram Follower-Following Relationships with Visual Insights</p>
      </div>

      <div className="about-section">
        <div className="section-card">
          <FaUsers className="section-icon" />
          <h2>Faylo Aim</h2>
          <p>
            The aim of Faylo is to provide an analytical tool for Instagram users to evaluate their follower-following relationships. By analyzing two files—one representing followers and the other following—the tool calculates the following key insights:
          </p>
          <ul>
            <li>Total followers</li>
            <li>Total following</li>
            <li>Mutual connections</li>
            <li>Users who are not following back</li>
          </ul>
        </div>

        <div className="section-card">
          <FaChartPie className="section-icon" />
          <h2>Faylo Vision</h2>
          <p>
            This tool is envisioned to help users manage their Instagram accounts by:
          </p>
          <ul>
            <li>Gaining insights into relationships, such as who is not following back and mutual connections.</li>
            <li>Easily visualizing data through charts to make better decisions in social media management.</li>
            <li>Streamlining the process of uploading and analyzing follower-following data.</li>
            <li>Allowing for interactive analysis, with pagination to view profiles not following back.</li>
          </ul>
        </div>

        <div className="section-card">
          <FaPhoneAlt className="section-icon" />
          <h2>How It Works</h2>
          <h3>User Interaction:</h3>
          <p>Users upload two HTML files:</p>
          <ul>
            <li>One for their followers list.</li>
            <li>One for their following list.</li>
          </ul>
          <p>The files must be in HTML format and contain Instagram profiles in the form of URLs (e.g., instagram.com/username).</p>

          <h3>Data Extraction:</h3>
          <p>Once the files are uploaded, the tool reads the content of these files and extracts Instagram usernames from the links using regular expressions.</p>

          <h3>Data Analysis:</h3>
          <p>The tool compares the followers and following lists:</p>
          <ul>
            <li><strong>Not Following Back:</strong> Identifies users in the following list but not in the followers list.</li>
            <li><strong>Mutual Connections:</strong> Identifies users who appear in both the followers and following lists.</li>
            <li><strong>Total Followers and Following:</strong> Calculates the total number of users in each list.</li>
          </ul>

          <h3>Data Presentation:</h3>
          <p>After analyzing the data, the tool presents the following information:</p>
          <ul>
            <li>Total number of followers</li>
            <li>Total number of following</li>
            <li>Count of users not following back</li>
            <li>Count of mutual connections</li>
          </ul>

          <h3>Graphical Visualization:</h3>
          <p>Users can visualize the data through:</p>
          <ul>
            <li>A Pie Chart showing the distribution of followers, following, mutual connections, and users not following back.</li>
            <li>A Line Chart (resembling trading view charts) showing a trend of the Instagram data.</li>
          </ul>

          <h3>Pagination:</h3>
          <p>If the list of users who are not following back is long, users can navigate through pages to see individual profiles. Each profile has an option to view their Instagram page.</p>

          <h3>Interactive Controls:</h3>
          <ul>
            <li><strong>Pagination Controls:</strong> Allow users to navigate between different pages of users not following back.</li>
            <li><strong>Show Graph Button:</strong> After the analysis, users can click a button to display the pie and line charts.</li>
          </ul>
        </div>

        <div className="section-card">
          <FaGlobe className="section-icon" />
          <h2>Conclusion</h2>
          <p>
            Faylo serves as an insightful tool for Instagram users, providing an easy-to-use interface to analyze their social media relationships and visualize the results for better management of their accounts. It enables users to make informed decisions about who to follow, unfollow, and focus on for building stronger mutual connections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
