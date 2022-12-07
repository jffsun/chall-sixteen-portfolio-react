// Components render a specific part of an applications UI

// Import React package and our useState hook (State of a component is an object that holds info and can change over the lifecycle of the component)
import React, { useState } from 'react';

// If the component being imported isn't specified, import this component
// Props is being being passed down from parent component in app.js 
export default function Header(props) {

  // Return JSX expression that renders HTMOL
  return (
    <div className="container">
      <header className="header">
          <h2 className="card-header bg-primary text-white">Jeffrey</h2>
      </header>
    </div>
  );
}

