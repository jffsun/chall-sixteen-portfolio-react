// Rendering a specific part of an applications UI
import React from 'react';

// Import Navigation bar styling 
import '../styles/Navigation.css'

// Destructure props 'currentPage' and 'handlePageChange' passed into Navigation() 
export default function Navigation({ currentPage, handlePageChange}) {
  return (
    // Unordered list containing links to each portfolio page
    <ul className="nav-container">
    <li>
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'About' ? 'navigation-link active' : 'navigation-link'}
      >
        About Me
      </a>
    </li>
    <li className="navigation-item">
      <a
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        // Check to see if the currentPage is `projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Portfolio' ? 'navigation-link active' : 'navigation-link'}
      >
        Portfolio
      </a>
    </li>
    <li className="navigation-item">
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Contact' ? 'navigation-link active' : 'navigation-link'}
      >
        Contact
      </a>
    </li>
    <li className="navigation-item">
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
        className={currentPage === 'Resume' ? 'navigation-link active' : 'navigation-link'}
      >
        Resume
      </a>
    </li>
  </ul>
  );
};
