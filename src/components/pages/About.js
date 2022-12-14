// Rendering a specific part of an applications UI
import React from 'react';

// Import About page component styling
import '../../styles/About.css'

export default function About(props) {

  // Return JSX expression that renders HTMOL
  return (
    <div className="body-container">
      <h1>About Me</h1>
      <div>
        <p>
          My name is Jeffrey and I a full stack developer based in Irvine. 
          During my final year of university, I began working full-time in the Human Resources/People field. I gained valuable experience 
          working closely with directors, managers, and recruiters, and was praised for my work ethic and people skills.
          Fast forward two years later and I have carved a new path for myself, earning a web-development bootcamp and now developing my own applications.
          I am someone who deeply values collaboration and can easily mesh with others in a team environment. 
          When I'm not coding, I am focused on bodybuilding, listening to science-related podcasts, or playing with dog Raven.
        </p>
      </div>  
    </div>
  );
};