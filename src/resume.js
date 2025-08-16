import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Resume = () => {
  return (
    <div className="App">
      <div className="main-container">
        <iframe
          src="other-assets/Resume - Charlotte Rosario.pdf"
          title="Charlotte Rosario's Resume"
          style={{
            width: '100vw',
            height: '100vh',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
}

export default Resume;
