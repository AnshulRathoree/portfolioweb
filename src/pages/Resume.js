// src/pages/Resume.js
import React from 'react';
import '../styles/Resume.css'; // Import the corresponding CSS file

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      {/* Use an <img> tag to display the resume image */}
      <div className="resume-viewer">
        <img
          src="/Resume.png" // Path to the image in the public folder
          alt="My Resume"
          className="resume-image"
        />
      </div>
      <div className="resume-actions">
        {/* Download Button */}
        <a href="/Resume.png" download="MyResume.png" className="download-button">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;