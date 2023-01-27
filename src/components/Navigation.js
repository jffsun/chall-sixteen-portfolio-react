// Rendering a specific part of an applications UI
import React, { useState } from 'react';

import '../styles/Navigation.css'

// Destructure props 'currentPage' and 'handlePageChange' passed from parent "PortfolioContainer"
export default function Navigation({ currentPage, handlePageChange}) {

  // Dropdown state variables
  const [open, setOpen] = useState(false);

  // Handles opening of dropdown menu by updating 'open' state variable
  const handleOpen = () => {
    setOpen(!open);
  };

  return (  
    // List with links to each portfolio page
    <div className="dropdown-container">
      <div>
        <button onClick={handleOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list-nested" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        {open ? (
          <ul className="menu-item">
          <li>
            <a
              href="#about"
              // On click, call handlePageChange function that sets currentPage state variable to 'About'
              onClick={() => handlePageChange('About')}
              // If the currentPage is 'About', set it's link to active and if not set to inactive
              className={currentPage === 'About' ? 'navigation-link active' : 'navigation-link'}>
              About Me
            </a>
          </li>
          <li className="navigation-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'navigation-link active' : 'navigation-link'}>
              Portfolio
            </a>
          </li>
          <li className="navigation-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
              className={currentPage === 'Contact' ? 'navigation-link active' : 'navigation-link'}>
              Contact
            </a>
          </li>
          <li className="navigation-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal navigation-link
              className={currentPage === 'Resume' ? 'navigation-link active' : 'navigation-link'}>
              Resume
          </a>
          </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};
