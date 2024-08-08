import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    return (
        <div>
            <div className='fixed-top'>
                <Navbar bg="light" expand="lg" className="custom-navbar">
                <Navbar.Brand href="#" className='navbar-brand-animated ml-3'>The Life School</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item className="nav-text">
                                Mail Us: <a href="mailto:principal@lifeschool.com">principal@lifeschool.com</a>
                                <span className='ml-2 line'> | </span>
                            </Nav.Item>
                            <Nav.Item className="nav-text">
                                Call Us: +91 9689092360
                                <span className='ml-2 line'> | </span>
                            </Nav.Item>
                            <Nav.Link href="#" className='Facebook-icon'><FaFacebookF /></Nav.Link>
                            <Nav.Link href="#" className='Instagram-icon'><FaInstagram /></Nav.Link>
                            <Nav.Link href="#" className='Youtube-icon'><FaYoutube /></Nav.Link>
                            <Nav.Link href="#" className='Linkedin-icon'><FaLinkedinIn /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <nav className="navbar">
                    <div className="navbar-logo ml-3">
                        <img src="\images\lifelogo.png" alt="The Life School" />
                    </div>
                    <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                        <li><Link to="/"><a href="#home">Home</a></Link></li>
                        <li><Link to="/about"><a href="#about">About Us</a></Link></li>
                        <li><Link to="/admission"><a href="#admissions">Admissions</a></Link></li>
                        <li><Link to="/ourstudents"><a href="#students">Our Students</a></Link></li>
                        <li><Link to="#sports"><a href="#sports">Sports</a></Link></li>
                        <li><Link to="#health"><a href="#health">Health & Safety</a></Link></li>
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
