// Import React package
import React from 'react';

// Import Header styling 
import '../styles/Header.css'

// If the component being imported isn't specified, import this component
// Props is being being passed down from parent component in app.js 
export default function Header() {

  // Return JSX expression that renders HTMOL
  return (
      <header className="header-container">
          <h1 className="card-header text-white">Jeffrey</h1>
      </header>
  );
}

