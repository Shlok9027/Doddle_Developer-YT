// src/components/GoosebumpLoader.jsx

import React, { useEffect, useRef } from 'react';
import './Loader.css';

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const loader = loaderRef.current;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;

      loader.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="loader-scene">
      <div className="goosebump-loader" ref={loaderRef}>
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
        <div className="core-glow"></div>
      </div>
      <div className="loader-text">Loading The Multiverse...</div>
    </div>
  );
};

export default Loader;
