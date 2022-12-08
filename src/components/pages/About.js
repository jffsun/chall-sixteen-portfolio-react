// Rendering a specific part of an applications UI
import React from 'react';
import Footer from '../Footer'

export default function About(props) {

  // Return JSX expression that renders HTMOL
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Who you are: 
        Welcome to the page about me!

        My name is Jeffrey and I a full stack developer based in Irvine. 
        During my final year of university, I began working full-time in the Human Resources/People field. I worked closely with directors, managers, and     
        and recruiters, and was praised for my work ethic, sense of urgency, people skills.
        
        Fast forward two years later and I have carved a new path for myself, developing web applications.
        When I am not coding, I am bodybuilding, listening to science-related podcasts, or playing with dog Raven.

        I deeply value collaboration, 
        Working with others is deeply rewarding to me

        I am someone who is collaborative and can easily mesh with others in a team environment. 
        I am curious and have a deep love for learning.  

        What can you do: 
        When building applications, my weapons of choice are Javascript 
        I am a MERN stack developer with experience using mySQL as well. 
      <ul>
        <h2>Skills</h2>
        <li>MongoDB</li>
        <li>mySQL</li>
        <li>Express</li>
        <li>React</li>
        <li>PWAs</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
      </p>
   
    </div>
  );
};