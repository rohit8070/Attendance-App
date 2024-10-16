import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSignupSignin = () => {
    setIsSignedUp(!isSignedUp);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Attendance App</h1>

        {/* Hamburger Icon for Small Screens */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className={isOpen ? "navbar-icon open" : "navbar-icon"}></span>
        </button>

        {/* Navbar Links */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#home" className="navbar-link">
            Home
          </a>
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="#attendance" className="navbar-link">
            Attendance
          </a>

          {/* Toggle between Signup and Signin */}
          <a
            href="#signup-signin"
            className="navbar-link"
            onClick={toggleSignupSignin}
          >
            {isSignedUp ? "Signin" : "Signup"}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
