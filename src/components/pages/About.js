// Rendering a specific part of an applications UI
import React from 'react';
import JeffreyProfessional from '../../images/JeffreyProfessional.png'

// Import About page component styling
import '../../styles/About.css'

export default function About() {

  // Return JSX expression that renders HTMOL
  return (
    <div className="about-container">
      <div className="portrait-container">
        <div className="portrait-captions">
          <h1>Full Stack Developer.</h1>
          <h3>I like creating fun, practical web applications</h3>
        </div>
        <img className="portrait-img" src={JeffreyProfessional} alt="Jeffrey Portrait" width="500" height="500"></img>
      </div>
      <div className="captions">
        {/* TO DO: Update to shorter version of LinkedIn profile */}
       <p>Skilled in Javascript, React, Redux, jQuery, Node.js, HTML5, CSS3, Mongodb, MySQL.</p>
      </div>  
    </div>
  );
};