import { React, useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home.js";
import Faces from "./Faces.js";
import Photos from "./Photos.js";
import ListArchive from './Lists.js';
import BooksArchive from './Books.js';
import QuotesArchive from './Quotes.js';
import QuestionsArchive from './Questions.js';
import Archive from './Archive.js';
import MCHRI from './MCHRI_poster.js';


export const RoutesList = () => {
 
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faces' element={<Faces />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/press' element={<ListArchive />} />
          <Route path='/books' element={<BooksArchive />} />
          <Route path='/quotes' element={<QuotesArchive />} />
          <Route path='/questions' element={<QuestionsArchive />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/stanford-mchri' element={<MCHRI />} />
          <Route path='*' element={<p style={{ textAlign: 'center' }}>Hmmm...sneaking around, I see. There's nothing here! <br />- xoxo, charlotte </p>} />
        </Routes>
    </div>
  );
};