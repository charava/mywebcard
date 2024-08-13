import React from 'react';
import { Link } from 'react-router-dom';

const Archive = () => {
  return (
    <div>
       <div className="main-container">
       <div className="bottom-box">
       <div className="social-box">

      <ul>
        <li>
          <Link className="App-link" to="/press">see my shenanigans in the news</Link>
        </li>
        <li>
          <Link className="App-link" to="/books">list of books i enjoyed reading because why not</Link>
        </li>
        <li>
          <Link className="App-link" to="/quotes">quotes i try to drop into conversations so i sound smart</Link>
        </li>
        <li>
          <Link className="App-link" to="/questions">questions i raise but don't (yet) have good answers to</Link>
        </li>
      </ul>
      </div></div>
      </div>
    </div>
  );
}

export default Archive;
