
import React from 'react';
import './GetInvolved.css';

const GetInvolved = () => {
  return (
    <div className="page-container">
      <div className="grid-container">
        <div className="grid-item">
          <div className="inner-container">
            <h1 id="titleGet">Get Involved</h1>
            <p className="getDescrip">
              Are you enthusiastic about promoting inclusivity in the tech field? Do you aspire to 
              contribute to the growth of the University of Notre Dame’s Women in Computer Science (WiCS) community? 
              Whether you're new to computer science or already familiar with Notre Dame WiCS, we welcome you to join 
              our community!
            </p>
          </div>
        </div>
        <div className="grid-item">
          <div className="inner-container">
            <iframe className="googleform"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfmVD_8VUx7oO1qVVldglUC9iDZZO-fiOwbdwuRU_JZALQD2g/viewform?embedded=true" 
              width="640" 
              height="1173" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Get Involved Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <footer className="footer">
        @ 2024 University of Notre Dame Women in CS
      </footer>
    </div>
  );
};

export default GetInvolved;