// src/components/TimelineExperience.js
import React, { useRef, useEffect } from 'react';

const TimelineExperience = () => {
  const timelineRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-experience">
        <div className="container">
      <h2>My Experience</h2>
      <ul className="timeline" ref={timelineRef}>
        <li className="timeline-item">
          <span>2020 - Present</span>
          <p>Senior Developer at TechCorp</p>
        </li>
        <li className="timeline-item">
          <span>2017 - 2020</span>
          <p>Developer at Innovatech</p>
        </li>
        <li className="timeline-item">
          <span>2015 - 2017</span>
          <p>Junior Developer at StartupCo</p>
        </li>
      </ul>
      </div>
    </section>
  );
};

export default TimelineExperience;