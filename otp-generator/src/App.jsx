import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
// import './styles.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-container ${isDarkMode ? 'night' : 'day'}`}>
      <main className="content">
        <h1 className="greeting">
          {isDarkMode ? '🌌 Good Night' : '☀️ Good Morning'}
        </h1>
        <p className="message">
          {isDarkMode ? 'The stars are shining bright above you.' : 'The sky is clear and full of promise.'}
        </p>
      </main>
      <DarkModeToggle onToggle={setIsDarkMode} />
    </div>
  );
};

export default App;
