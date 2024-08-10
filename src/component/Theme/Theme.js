import React, { useState, useEffect } from 'react';
import './Theme.css';

function Theme() {
  const [theme, setTheme] = useState('light');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    document.documentElement.classList.add('color-theme-in-transition');
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('color-theme-in-transition');
    }, 1000);

    return () => clearTimeout(timer);
  }, [theme]);

  const handleChange = (newTheme) => {
    setTheme(newTheme);
    setDropdownOpen(false);
  };

  return (
    <div className="theme-container">
      <button
        type="button"
        className="dropdown-button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        Choose a Theme
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {['light', 'dark', 'pink', 'blue', 'yellow'].map((themeName) => (
            <button
              key={themeName}
              type="button"
              className={`theme-option ${theme === themeName ? 'active' : ''}`}
              onClick={() => handleChange(themeName)}
              aria-pressed={theme === themeName}
            >
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Theme;