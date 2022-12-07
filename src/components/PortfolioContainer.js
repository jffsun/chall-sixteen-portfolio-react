import React, { useState } from 'react';
// Import components seen throughout portfolio
import Header from './Header'
import Navigation from './Navigation';
import Footer from './Footer';
import Project from './Project';

// Import our various page components
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Handles all state changes which dictates which page the user is viewing
export default function PortfolioContainer() {

  // stateVariable 'currentPage' is updated with 'setCurrentPage' function
  // Set intial value of currentPage to Home 
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    // If stateVariable 'currentPage' equals home
    if (currentPage === 'About') {
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
    <div>
      <Header />
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
