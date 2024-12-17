import React, { useState } from 'react';
import '../App.css'; // Import the CSS for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (for now just log the data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can later add functionality to send data to a server or email
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have any questions? Reach out to us and we'll get back to you soon!</p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>📧 Email: example@email.com</p>
          <p>📞 Phone: +123 456 789</p>
          <p>📍 Location: Anywhere, Earth</p>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
