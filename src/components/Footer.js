// Components render a specific part of an applications UI

// Import React package and our useState hook (State of a component is an object that holds info and can change over the lifecycle of the component)
import React, { useState } from 'react';

// Import Navigation component to nest inside our header
import Navigation from './Navigation';


// If the component being imported isn't specified, import this component
// Props is being being passed down from parent component in app.js 
export default function Header(props) {
  const [stateVariable, functionToUpdate] = useState('Initial Value of State Variable!');


  // Return JSX expression that renders HTMOL
  return (
    <div className="container">
      <header className="header">
          <h2 className="card-header bg-primary text-white">Header!</h2>
          {/* Render the Navigation component from within the Header component */}
          <Navigation />
      </header>
    </div>
  );
}

