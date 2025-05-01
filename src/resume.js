import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
   
  return (
    <div>
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
      <div style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '40px' }}>
          <Link
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: 'gray',
                }}
                to="/archive"
              >
                ← take me back
              </Link>
              </div>
    </div>
    </div>
  );
}

export default Resume;
