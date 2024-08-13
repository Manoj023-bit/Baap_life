import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { useTranslation } from 'react-i18next';
import Theme from '../Theme/Theme';

const CustomNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t, i18n } = useTranslation();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    setIsPopupVisible(false); // Close the popup after selecting a language
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
                  style={{ position: 'relative', marginTop: "0.8pc" }}
                >
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
                        width: '6pc'
                      }}
                    >
                      <label>
                        <input
                          type="radio"
                          value="en"
                          checked={selectedLanguage === 'en'}
                          onChange={() => changeLanguage('en')}
                        />
                        {t('buttons.English')}
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="mr"
                          checked={selectedLanguage === 'mr'}
                          onChange={() => changeLanguage('mr')}
                        />
                        {t('buttons.Marathi')}
                      </label>
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
              <NavLink to="/" activeClassName="active" exact>
                {t('navbar.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                {t('navbar.about')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admission" activeClassName="active">
                {t('navbar.admissions')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourstudents" activeClassName="active">
                {t('navbar.students')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/sports" activeClassName="active">
                {t('navbar.sports')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/health" activeClassName="active">
                {t('navbar.health')}
              </NavLink>
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
