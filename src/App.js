import {BrowserRouter} from 'react-router-dom';
import { RoutesList } from './routes'; // where we are going to specify our routes
import {React, useState, useEffect} from 'react'


function App() {
  
  return (
    <BrowserRouter>
          <RoutesList />
    </BrowserRouter>
  );
}

export default App;


