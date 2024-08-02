import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ImageCarousel from './ImageCarousel';

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-top">
          <span>The Life School</span>
          <div className="navbar-top-links">
            <a href="mailto:principal@mystrawberryschool.com">Mail Us: principal@lifeschool.com</a>
            <span> | </span>
            <a href="tel:+9689092360">Call Us: +91 9689092360</a>
            <span> | </span>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@baapcompany"><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/baapcompany/mycompany/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="navbar-main">
          <img src='./images/THE LIFE SCHOOL.png' className="navbar-logo" alt="Life School Logo" />
          <nav className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/Admission">Admissions</Link>
            <Link to="/our students">Our Students</Link>
            <Link to="/life-at-school">Sports</Link>
            <Link to="/health-safety">Health & Safety</Link>
          </nav>
        </div>
      </header>
      <ImageCarousel />
      <mark style={{ backgroundColor: 'pink', display: 'block', textAlign: 'center', padding: '10px' }}>
        The Life School
</mark>
     
    </div>
    
  );
};

export default Navbar;
