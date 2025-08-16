import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MCHRI = () => {
  return (
    <div className="App">
      <div className="main-container">
        <img
          src={"other-assets/MCHRI_poster.pptx.jpg"}
          alt={`Stanford MCRHI Poster - Charlotte Rosario`}
          style={{ width: "95vw", height: "auto" }}
        />
        <br />
        <br />
        <img
          src={"other-assets/Stanford MCHRI - Charlotte Rosario.jpeg"}
          alt={`Stanford MCRHI Poster - Charlotte Rosario`}
          style={{ width: "auto", height: "95vh" }}
        />
        <br />
        <br />
        <br />
      </div>
      <div className="nav-back">
        <Link className="nav-link" to="/">
          ← back
        </Link>
      </div>
    </div>
  );
}

export default MCHRI;
