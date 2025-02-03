// src/components/Hero.js
import React from 'react';
import heroBg from '../assets/images/hero-bg.mp4';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
        <div className="container">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={heroBg} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="text-reveal">Welcome to My Portfolio</h1>
        <p className="gradient-overlay">Innovative Solutions, Creative Designs</p>
        <div className="profile-card">
          <img src="/assets/images/profile.jpg" alt="Profile" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;