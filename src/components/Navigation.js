// Rendering a specific part of an applications UI
import React, { useState } from 'react';

export default function Navigation(props) {

  const [count, setCount] = useState(0);

  // handleClick function 
  const handleClick = () => {

    // Calls on our function to update stateVariable
    setCount((count + 1));
    console.log(`You've clicked button ${count} times!`);
  };


  // Return JSX expression that renders HTMOL
  return (
    <div className="container">
      <nav className="nav-bar">
          <div>
            <a className="nav-link" href="#resume">Resume</a>
          </div>
          <div>
            <a className="nav-link" href="#projects">Projects</a>
          </div>
          <div>
            <a className="nav-link" href="#contact">Contact Me</a>
          </div>
          <div>
            {/* Use JSX to call our handleClick function when we click on button */}
            <button className="btn btn-primary" onClick={handleClick}>Button</button>
          </div>
      </nav>
    </div>
  );
};