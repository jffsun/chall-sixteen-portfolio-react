// Rendering a specific part of an applications UI
import React from 'react';

// Import Navigation bar styling 
import '../styles/Navigation.css'

// Destructure props 'currentPage' and 'handlePageChange' passed into Navigation() 
export default function Navigation({ currentPage, handlePageChange}) {
  return (
    // Unordered list containing links to each portfolio page
    <ul className="nav-container">
    <li className="nav-item">
      <a
        href="#home"
        onClick={() => handlePageChange('Home')}
        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        About Me
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        // Check to see if the currentPage is `projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
      >
        Portfolio
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        Contact
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
      >
        Resume
      </a>
    </li>
  </ul>
  );
};