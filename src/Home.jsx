
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import wicsLogo from './assets/wicsLogo.png';
import graceHop from './assets/graceHop.png';
import './Header.css';
import './App.css';

const Home = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="grid-container">
        <div className="grid-item1">
          <img src={wicsLogo} className="logo" alt="WiCS Logo" />
        </div>
        <div className="grid-item2">
          <div className="inner-container">
            <h1>
              We are <span id="highlight">Women In Computer Science</span> at the University of Notre Dame 
            </h1>
            <p>
              Dedicated to building a community of women in technology </p>
          </div>
        </div>
      </div> 
      <div className="grid-column">
        <div className="grid-column-item">
          <p className='title'>
            Empowering <span id="highlight">Women</span>, Innovating Tomorrow
          </p>
        </div>
        <div className="image-container">
          <img src={graceHop} className="picture" alt="WiCS @ Grace Hopper" />
        </div>
      </div>
      <div className="grid-button">
        <Link to="/Team" className="button1" role="button">Team</Link>
        <Link to="/Events" className="button1" role="button">Events</Link>
        <Link to="/GetInvolved" className="button1" role="button">Get Involved</Link>
      </div>
      <div className="grid-column">
        <div className="grid-column-item">
          <p className='title2'>
            Follow Us!
          </p>
        </div>
        <div className="grid-column-item">
          <p className='title3'>
            Stay connected for the latest updates on our events, resources, and programs!</p>
        </div>
      </div>
      <div className="instagram-feed">
        {[
          'https://www.instagram.com/p/C0f2VQJgmgy/?next=%2F',
          'https://www.instagram.com/p/C0SXi30xF-9/?next=%2F',
          'https://www.instagram.com/p/CzomUtORkyW/?next=%2F',
          'https://www.instagram.com/p/CywB78jxxAu/?next=%2F',
          'https://www.instagram.com/p/CyEmfAPRR7G/?next=%2F',
          'https://www.instagram.com/p/Cx0iXYYgpS7/?next=%2F&img_index=1',
          'https://www.instagram.com/p/CkbdoYXPG6J/?next=%2F',
          'https://www.instagram.com/p/CjTiKCiPnaO/?next=%2F',
          'https://www.instagram.com/p/CiQkc83PysK/?next=%2F'
        ].map((url, index) => (
          <div key={index} className="instagram-post">
            <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14">
              <div style={{ padding: '16px' }}>
                <a href={url} style={{ background: '#FFFFFF', lineHeight: '0', padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank" rel="noopener noreferrer">
                      
                </a>
              </div>
            </blockquote>
          </div>
        ))}
      </div>

      <div className="footer">
        @ 2024 University of Notre Dame Women in CS
      </div>
    </>
  );
};

export default Home;