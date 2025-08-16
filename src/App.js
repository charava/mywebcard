import {BrowserRouter} from 'react-router-dom';
import { RoutesList } from './routes'; // where we are going to specify our routes
import {React, useState, useEffect} from 'react'
import ScrollToTop from './ScrollToTop';

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RoutesList />
    </BrowserRouter>
  );
}

export default App;


