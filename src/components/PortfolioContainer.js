import React, { useState } from 'react';

// Import components seen throughout portfolio
import Header from './Header'
import Navigation from './Navigation';
import Footer from './Footer';
import Sidebar from './Sidebar';

// Import our various page components
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


// Handles all state changes which dictates which page the user is viewing
export default function PortfolioContainer() {

  // stateVariable 'currentPage' is updated with 'setCurrentPage' function
  // Set "About" page to first page user sees
  const [currentPage, setCurrentPage] = useState('About');

  // Checks value of `currentPage` and renders the corresponding page component accordingly
  const renderPage = () => {

    // If stateVariable 'currentPage' equals About
    if (currentPage === 'About') {

      // Return the JSX of the About page component
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  // Takes given page chosen in Navigation and changes state of currentPage accordingly
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolio-container">
      {/* Passing the currentPage and function to update page as props into Navigation */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header/>
      {/* Returns page component depending on currentPage's state */}
      {renderPage()}
      <Footer />
    </div>

  );
}
