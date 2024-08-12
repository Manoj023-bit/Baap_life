import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Theme from '../Theme/Theme';

const CustomNavbar = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div className='fixed-top'>
        <Navbar bg="light" expand="lg" className="custom-navbar">
          <Navbar.Brand href="#" className='navbar-brand-animated ml-3'>{t('navbar.brand')}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="nav-text">
                {t('navbar.mail')}: <a href="mailto:principal@lifeschool.com">principal@lifeschool.com</a>
                <span className='ml-2 line'> | </span>
              </Nav.Item>
              <Nav.Item className="nav-text">
                {t('navbar.call')}: +91 9689092360
                <span className='ml-2 line'> | </span>
              </Nav.Item>
              <Nav.Link href="#" className='Facebook-icon'><FaFacebookF /></Nav.Link>
              <Nav.Link href="#" className='Instagram-icon'><FaInstagram /></Nav.Link>
              <Nav.Link href="#" className='Youtube-icon'><FaYoutube /></Nav.Link>
              <Nav.Link href="#" className='Linkedin-icon'><FaLinkedinIn /></Nav.Link>
              <li>
                <button className='btn btn-outline-primary ml-2' onClick={() => changeLanguage('en')}>English</button>
                <button className='btn btn-outline-primary ml-2' onClick={() => changeLanguage('mr')}>Marathi</button>
              </li>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <nav className="navbar">
          <div className="navbar-logo ml-3">
            <img src="/images/lifelogo.png" alt={t('navbar.brand')} />
          </div>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
            <li><Link to="/"><a href="#home">{t('navbar.home')}</a></Link></li>
            <li><Link to="/about"><a href="#about">{t('navbar.about')}</a></Link></li>
            <li><Link to="/admission"><a href="#admissions">{t('navbar.admissions')}</a></Link></li>
            <li><Link to="/ourstudents"><a href="#students">{t('navbar.students')}</a></Link></li>
            <li><Link to="/sports"><a href="#sports">{t('navbar.sports')}</a></Link></li>
            <li><Link to="/health"><a href="#health">{t('navbar.health')}</a></Link></li>

            <li className='mr-5'>
              <Theme />
            </li>          </ul>
          <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default CustomNavbar;
