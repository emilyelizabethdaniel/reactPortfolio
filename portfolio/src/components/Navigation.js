import React from "react";
import "../css/navigation.css"

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div>
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#work"
            onClick={() => handlePageChange('Work')}
  
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            Work
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
  
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
      </div>
    )
};

export default Navigation;