// src/components/Preloader.js
import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/animations/loading.json';
import '../styles/Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    const duration = 3000; // Total duration of the preloader in milliseconds (e.g., 3 seconds)

    const animateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Calculate progress percentage based on elapsed time
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(animateProgress); // Continue animating until progress reaches 100%
      } else {
        // Add fade-out class after progress completes
        setTimeout(() => {
          if (preloaderRef.current) {
            preloaderRef.current.classList.add('fade-out');
          }
          setTimeout(() => setLoading(false), 500); // Hide preloader after fade-out
        }, 500);
      }
    };

    requestAnimationFrame(animateProgress); // Start the animation
  }, []);

  return loading ? (
    <div ref={preloaderRef} className="preloader">
      <Lottie animationData={loadingAnimation} loop={true} />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  ) : null;
};

export default Preloader;