// src/components/ContactForm.js
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../assets/animations/success.json';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section className="contact-form">
        <div className="container">
      <h2>Contact Me</h2>
      {submitted ? (
        <div className="success-message">
          <Lottie animationData={successAnimation} loop={false} />
          <p>Thank you for your message!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </label>
          <button type="submit">Send</button>
        </form>
      )}
      </div>
    </section>
  );
};

export default ContactForm;