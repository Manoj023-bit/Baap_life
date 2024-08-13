import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Theme from '../Theme/Theme';

const CustomNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t, i18n } = useTranslation();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsPopupVisible(false); // Close the popup after selecting a language
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };

  const handleLanguagePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <div className="fixed-top">
        <Navbar bg="light" expand="lg" className="custom-navbar">
          <Navbar.Brand href="#" className="navbar-brand-animated ml-3">
            {t('navbar.brand')}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="nav-text">
                {t('navbar.mail')}: <a href="mailto:principal@lifeschool.com">principal@lifeschool.com</a>
                <span className="ml-2 line"> | </span>
              </Nav.Item>
              <Nav.Item className="nav-text">
                {t('navbar.call')}: +91 9689092360
                <span className="ml-2 line"> | </span>
              </Nav.Item>
              <Nav.Link href="https://www.facebook.com/baap.company/" className="Facebook-icon">
                <FaFacebookF />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/the_baap_company/?hl=en" className="Instagram-icon">
                <FaInstagram />
              </Nav.Link>
              <Nav.Link href="https://www.youtube.com/@baapcompany" className="Youtube-icon">
                <FaYoutube />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/company/baapcompany/?originalSubdomain=in" className="Linkedin-icon">
                <FaLinkedinIn />
              </Nav.Link>

             {/* Change Language Button */}
              <Nav.Item>
              <div 
                className="language-icon-container"
                onClick={handleLanguagePopupToggle}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative', marginTop:"0.8pc" }}>
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="icon-btn"
                  title={t('Change Language')}
                />

                {isPopupVisible && (
                  <div
                    className="popup-menu"
                    style={{
                      position: 'absolute',
                      top: '100%', // Position the menu below the icon
                      right: 0, // Align the menu with the right edge of the icon
                      backgroundColor: '#fff',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                      padding: '10px',
                      borderRadius: '4px',
                      zIndex: 1000,
                    }}
                  >
                    <p onClick={() => changeLanguage('en')}>English</p>
                    <p onClick={() => changeLanguage('mr')}>Marathi</p>
                   
                  </div>
                )}
              </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <nav className="navbar">
          <div className="navbar-logo ml-3">
            <img src="/images/lifelogo.png" alt={t('navbar.brand')} />
          </div>
          <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
            <li>
              <Link to="/">
                <a href="#home">{t('navbar.home')}</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a href="#about">{t('navbar.about')}</a>
              </Link>
            </li>
            <li>
              <Link to="/admission">
                <a href="#admissions">{t('navbar.admissions')}</a>
              </Link>
            </li>
            <li>
              <Link to="/ourstudents">
                <a href="#students">{t('navbar.students')}</a>
              </Link>
            </li>
            <li>
              <Link to="/sports">
                <a href="#sports">{t('navbar.sports')}</a>
              </Link>
            </li>
            <li>
              <Link to="/health">
                <a href="#health">{t('navbar.health')}</a>
              </Link>
            </li>
            <li className="mr-5">
              <Theme />
            </li>
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
