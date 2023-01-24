// Import React package
import React from 'react';

// Import Header styling 
import '../styles/Header.css'

// TO DO: Update header spacing and make more visually aesthetic 
export default function Header() {

  // Return JSX expression that renders Header's HTML
  return (
      <header>
          <div className="header-page">
            <h1>Jeffrey Sun</h1>
            <h2>Full Stack Developer</h2>
          </div>
      </header>
  );
}

