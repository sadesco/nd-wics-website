import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import headerLogo from './assets/headerLogo.png';
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
      setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
        setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
      <header className="header">
            <Link to="/">
                 <img src={headerLogo} className="logoHeader" alt="Header WiCS Logo" />
            </Link>
            <div className="menu-toggle" onClick={toggleMenu}>
              &#9776;
            </div>
            <div className={`container ${isActive ? 'active' : ''}`} ref={navRef}>
                <nav>
                    <ul className={`nav-links ${isActive ? 'active' : ''}`}>
                        <li>
                            <Link to="/About" onClick={toggleMenu}>
                                about
                            </Link>
                        </li>
                        <li>
                            <Link to="/Team" onClick={toggleMenu}>
                                team
                            </Link>
                        </li>
                        <li>
                            <Link to="/Events" onClick={toggleMenu}>
                                events
                            </Link>
                        </li>
                        <li>
                            <Link to="/GetInvolved" onClick={toggleMenu}>
                                get involved
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
    
      </header>
  );
};

export default Header;