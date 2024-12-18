import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp,FaGoogle } from 'react-icons/fa'; // Import icons from react-icons
import '../App.css'; // Import the CSS for styling

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact MsDev</h1>
        <p>Feel free to reach out to me!</p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <h3>Developer</h3>
          <p><strong>Name:</strong> Mohammed Shaheen KP</p>
          <p><strong>Email:</strong> ms.shaheenkp@gmail.com</p>
          <p><strong>Social Media:</strong></p>
          <div className="social-media-links">
            <a href="https://www.instagram.com/___zcl3_" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram size={30} />
            </a>
            <a href="https://shaheenkp.in/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGoogle size={30} />
            </a>
            <a href="https://www.linkedin.com/in/shaheenkp/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Mscode04" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size={30} />
            </a>
            <a href="https://wa.me/8157980307" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
