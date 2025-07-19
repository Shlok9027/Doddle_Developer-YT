import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DarkModeToggle = ({ onToggle }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    onToggle(darkMode);
  }, [darkMode, onToggle]);

  return (
    <div className="dark-toggle-floating" aria-label="Toggle dark mode">
      <motion.div
        className={`toggle-track ${darkMode ? 'active' : ''}`}
        onClick={() => setDarkMode(prev => !prev)}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="toggle-thumb"
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        >
          {darkMode ? '🌙' : '☀️'}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DarkModeToggle;
