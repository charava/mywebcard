import { React, useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home.js";
import Faces from "./subpages/Faces.js";
import Photos from "./subpages/Photos.js";
import Press from './subpages/Press.js';
import Speaking from './subpages/Speaking.js';
import Articles from './subpages/Articles.js';
import BooksArchive from './subpages/Books.js';
import QuotesArchive from './subpages/Quotes.js';
import QuestionsArchive from './subpages/Questions.js';
// import Archive from './Archive.js';
import MCHRI from './subpages/MCHRI_poster.js';
import Resume from './resume.js';
import PlacesTraveled from './subpages/Travel.js';
import Art from './subpages/Art.js';

export const RoutesList = () => {
 
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faces' element={<Faces />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/press' element={<Press />} />
          <Route path='/speaking' element={<Speaking />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/books' element={<BooksArchive />} />
          <Route path='/quotes' element={<QuotesArchive />} />
          <Route path='/questions' element={<QuestionsArchive />} />
          {/* <Route path='/archive' element={<Archive />} /> */}
          <Route path='/stanford-mchri' element={<MCHRI />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/travel' element={<PlacesTraveled />} />
          <Route path='/art' element={<Art />} />
          <Route path='*' element={<p style={{ textAlign: 'center' }}>Hmmm...sneaking around, I see. There's nothing here! <br />- xoxo, charlotte </p>} />
        </Routes>
    </div>
  );
};