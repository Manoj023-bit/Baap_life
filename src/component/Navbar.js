// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <span>Strawberry English Medium School</span>
        <div className="navbar-top-links">
          <a href="mailto:principal@mystrawberryschool.com">Mail Us</a>
          <span> | </span>
          <a href="tel:+917588606745">Call Us: +917588606745</a>
          <span> | </span>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="navbar-main">
        <img src="/path/to/logo.png" alt="Strawberry Logo" className="navbar-logo" />
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/life-at-strawberry">Life @ Strawberry</Link>
          <Link to="/students-life">Students Life</Link>
          <Link to="/parent-corner">Parent Corner</Link>
          <Link to="/alumni-connect">Alumni Connect</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/health-safety">Health & Safety</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
