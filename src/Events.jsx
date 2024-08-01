import React from 'react';
import './Events.css';

import girlsWhoCodeImg from "./assets/girlswhocode.png";
import panelsImg from "./assets/panels.png";
import conferenceImg from "./assets/conference.png";

const Events = () => {
  return (
    <div className="events-wrapper">
      <div className="events-container">
        <h1 className="events-title">Our Events</h1>
        <div className="events-grid">
          <div className="event-card">
            <img src={girlsWhoCodeImg} alt="Girls Who Code" className="event-image"/>
            <h2>Volunteer for Girls Who Code</h2>
            <p>
              Through Girls Who Code, ND student volunteers teach CS courses 
              to girls in local high schools to help decrease the gap of 
              women in STEM. GWC provides lesson plans and curriculum content.  
              Python games and HTML/CSS/JS websites!
            </p>
          </div>
          <div className="event-card">
            <img src={panelsImg} alt="Workshops & Panels" className="event-image"/>
            <h2>Workshops & Panels</h2>
            <p>
              WiCS proudly hosts resume workshops and internship panels designed 
              to empower members and prepare them for successful careers in tech. 
              The workshops provide personalized guidance from experienced professionals, 
              helping students craft standout resumes tailored to the tech industry. 
              The panels feature women from leading tech companies who share 
              their insights and tips for landing internships.
            </p>
          </div>
          <div className="event-card">
            <img src={conferenceImg} alt="Conference" className="event-image"/>
            <h2>WiCS Conferences</h2>
            <p>
              WiCS actively participates in the Grace Hopper Celebration every year, the 
              world's largest gathering of women technologists. This annual conference 
              provides an invaluable opportunity for our members to network with industry 
              leaders, attend inspiring talks, and participate in hands-on workshops. 
              Students have direct access to recruiters from top tech companies, often 
              leading to internships and job offers.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        © 2024 University of Notre Dame Women in CS
      </div>
    </div>
  );
};

export default Events;