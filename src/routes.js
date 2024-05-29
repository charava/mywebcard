import { React, useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home.js";
import Faces from "./Faces.js";



export const RoutesList = () => {
 
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faces' element={<Faces />} />
          <Route path='*' element={<p>Hmmm...Sneaking around, I see. There's nothing here! </p>} />
        </Routes>
    </div>
  );
};
