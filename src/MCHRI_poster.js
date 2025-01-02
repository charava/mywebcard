import React from 'react';
import { Link } from 'react-router-dom';

const MCHRI = () => {
  return (
    <div>
       <div className="main-container">
        <img
                    src={"other-assets/Stanford MCHRI - Charlotte Rosario.jpeg"}
                    alt={`Stanford MCRHI Poster - Charlotte Rosario`}
                    style={{ width: "auto", height: "95vh" }} // Adjust the width as needed

                />
        <br></br>
        <br></br>

         <img
                    src={"other-assets/MCHRI_poster.pptx.jpg"}
                    alt={`Stanford MCRHI Poster - Charlotte Rosario`}
                    style={{ width: "95vw", height: "auto" }} // Adjust the width as needed

                />
        <br></br>
        <br></br>
        <br></br>
      </div>
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
  );
}

export default MCHRI;
