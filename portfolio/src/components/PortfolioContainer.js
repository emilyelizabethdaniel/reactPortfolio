import React, { useState } from 'react';
import Work from "./Work";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Navigation from './Navigation';

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Work');

    function renderPage() {
        if (currentPage === 'Work') {
            return <Work />
        }
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
            return <Contact />
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* // TODO: Add a comment describing what we are passing as props */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* // TODO: Add a comment explaining what is happening on the following line */}
            {renderPage()}
        </div>
        )
}

export default PortfolioContainer;