// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProjectsGallery from '../components/ProjectsGallery';
import TimelineExperience from '../components/TimelineExperience';
import ContactForm from '../components/ContactForm';
import Preloader from '../components/Preloader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data or waiting for assets)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the preloader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {/* Show the preloader only when isLoading is true */}
      {isLoading && <Preloader />}

      {/* Render the rest of the content once loading is complete */}
      {!isLoading && (
        <>
          <Hero />
          <ProjectsGallery />
          <TimelineExperience />
          <ContactForm />
        </>
      )}
    </>
  );
};

export default Home;