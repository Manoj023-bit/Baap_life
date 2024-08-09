import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Theme from '../Theme/Theme';

const languages = {
    en: {
        brand: "The Life School",
        mailUs: "Mail Us",
        callUs: "Call Us",
        home: "Home",
        aboutUs: "About Us",
        admissions: "Admissions",
        ourStudents: "Our Students",
        sports: "Sports",
        health: "Health & Safety",
    },
    mr: {
        brand: "लाईफ स्कूल",
        mailUs: "आम्हाला मेल करा",
        callUs: "आमच्याशी संपर्क साधा",
        home: "मुख्यपृष्ठ",
        aboutUs: "आमच्याबद्दल",
        admissions: "प्रवेश",
        ourStudents: "आमचे विद्यार्थी",
        sports: "क्रीडा",
        health: "आरोग्य आणि सुरक्षा",
    },
};

const CustomNavbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    const currentLanguage = languages[language];

    return (
        <div>
            <div className='fixed-top'>
                <Navbar bg="light" expand="lg" className="custom-navbar">
                    <Navbar.Brand href="#" className='navbar-brand-animated ml-3'>
                        {currentLanguage.brand}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto d-flex align-items-center">
                            <Nav.Item className="nav-text">
                                {currentLanguage.mailUs}: <a href="mailto:principal@lifeschool.com">principal@lifeschool.com</a>
                                <span className='ml-2 line'> | </span>
                            </Nav.Item>
                            <Nav.Item className="nav-text">
                                {currentLanguage.callUs}: +91 9689092360
                                <span className='ml-2 line'> | </span>
                            </Nav.Item>
                            <Nav.Link href="#" className='Facebook-icon'><FaFacebookF /></Nav.Link>
                            <Nav.Link href="#" className='Instagram-icon'><FaInstagram /></Nav.Link>
                            <Nav.Link href="#" className='Youtube-icon'><FaYoutube /></Nav.Link>
                            <Nav.Link href="#" className='Linkedin-icon'><FaLinkedinIn /></Nav.Link>
                            <button className="btn btn-outline-primary ml-2" onClick={() => handleLanguageChange('en')}>English</button>
                            <button className="btn btn-outline-primary ml-2" onClick={() => handleLanguageChange('mr')}>मराठी</button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <nav className="navbar">
                    <div className="navbar-logo ml-3">
                        <img src="\images\lifelogo.png" alt={currentLanguage.brand} />
                    </div>
                    <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                        <li><Link to="/"><a href="#home">{currentLanguage.home}</a></Link></li>
                        <li><Link to="/about"><a href="#about">{currentLanguage.aboutUs}</a></Link></li>
                        <li><Link to="/admission"><a href="#admissions">{currentLanguage.admissions}</a></Link></li>
                        <li><Link to="/ourstudents"><a href="#students">{currentLanguage.ourStudents}</a></Link></li>
                        <li><Link to="/sports"><a href="#sports">{currentLanguage.sports}</a></Link></li>
                        <li><Link to="/health"><a href="#health">{currentLanguage.health}</a></Link></li>
                        <Theme />
                    </ul>
                    <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                        {isMobile ? <FaTimes /> : <FaBars />}
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default CustomNavbar;
