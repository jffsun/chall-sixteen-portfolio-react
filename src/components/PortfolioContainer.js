import React, { useState } from 'react';
// Import components seen throughout portfolio
import Header from './Header'
import Navigation from './Navigation';
import Footer from './Footer';

// Import our various page components
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Handles all state changes which dictates which page the user is viewing
export default function PortfolioContainer() {

  // stateVariable 'currentPage' is updated with 'setCurrentPage' function
  // Set intial value of currentPage to About 
  const [currentPage, setCurrentPage] = useState('About');

  // Checks value of `currentPage` is and render the corresponding page component accordingly
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

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolio-container">
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>

  );
}
