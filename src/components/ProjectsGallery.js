// src/components/ProjectsGallery.js
import React, { useState } from 'react';
import '../styles/ProjectsGallery.css';

const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Quiz Flow with Gamification Web Application',
      images: [
        '/assets/images/projects/project-01.webp',
        '/assets/images/projects/project-01-2.webp',
        '/assets/images/projects/project-01-3.webp',
      ],
    },
    {
      id: 2,
      title: 'BeyondChats Chatbot UI/UX Workflow for New Business Setup',
      images: ['/assets/images/projects/project-02.webp',
        '/assets/images/projects/project-02-2.webp',
        '/assets/images/projects/project-02-3.webp',
        '/assets/images/projects/project-02-4.webp',
        '/assets/images/projects/project-02-5.webp'
      ],
    },
    // Add more projects...
  ];

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 < selectedProject.images.length ? prevIndex + 1 : 0
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : selectedProject.images.length - 1
      );
    }
  };

  return (
    <section className="projects-gallery">
      <div className="container">
        <h2>My Projects</h2>
        <div className="gallery">
          {projects.map((project) => (
            <div
              key={project.id}
              className="gallery-item"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0); // Reset to the first image
              }}
            >
              <img src={project.images[0]} alt={project.title} />
              <p>{project.title}</p>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal active" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedProject.images[currentImageIndex]} alt={selectedProject.title} />

              {/* Navigation Buttons */}
              {selectedProject.images.length > 1 && (
                <>
                  <button className="nav-button prev" aria-label="Previous Image" onClick={handlePrevImage}>
                    ←
                  </button>
                  <button className="nav-button next"  aria-label="Next Image" onClick={handleNextImage}>
                    →
                  </button>
                </>
              )}

              <h3>{selectedProject.title}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;