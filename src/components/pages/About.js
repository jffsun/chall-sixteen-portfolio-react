// Rendering a specific part of an applications UI
import React from 'react';
import JeffreyProfessional from '../../images/JeffreyProfessional.png'

// Import About page component styling
import '../../styles/About.css'

export default function About() {

  // Return JSX expression that renders HTMOL
  return (
    <div className="body-container">
      <h1>About Me</h1>
      <div className="about-body">
        <img src={JeffreyProfessional} alt="Jeffrey Portrait" width="300" height="300"></img>
        <p>
          My name is Jeffrey and I am full stack developer based in Irvine. 
          A third into my final year my university, I wanted to jumpstart my career and began working full-time in the Human Resources while finishing my courses. 
          In HR, I worked closely with directors and recruiters, and was praised for my work ethic and people skills. However, I learned that I wanted to pursue 
          a more technical role. What started as basic python tutorial eventually led to a web-development bootcamp certificate and the ability to create web applications. 
          When I'm not coding, I am focused on bodybuilding, listening to science-related podcasts, or playing with dog Raven!
        </p>
      </div>  
    </div>
  );
};