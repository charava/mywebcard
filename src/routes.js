import { React, useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home.js";
import Faces from "./Faces.js";
import Photos from "./Photos.js";



export const RoutesList = () => {
 
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faces' element={<Faces />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='*' element={<p style={{ textAlign: 'center' }}>Hmmm...sneaking around, I see. There's nothing here! <br />- xoxo, charlotte </p>} />
        </Routes>
    </div>
  );
};