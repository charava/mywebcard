import React from 'react';
import { Link } from 'react-router-dom';

const Archive = () => {
  return (
    <div>
      <div className="main-container">
        <div className="bottom-box">
          <div className="social-box">
            <ul>
              <div>
                <h1>Other random stuff! Yay!</h1>
              </div>

              <li>
                <Link className="App-link" to="/press">shenanigans in the news</Link>
              </li>
              <li>
                <Link className="App-link" to="/books">list of books i enjoyed reading because why not</Link>
              </li>
              <li>
                <Link className="App-link" to="/quotes">quotes i try to drop into conversations to sound smart</Link>
              </li>
              <li>
                <Link className="App-link" to="/questions">questions i raise but don't (yet) have good answers to</Link>
              </li>
              <li>
                <Link className="App-link" to="/travel">places i've traveled to</Link>
              </li>
              <li>
                <Link className="App-link" to="/stanford-mchri">stanford mchri research poster</Link>
              </li>
              <li>
                <Link className="App-link" to="https://youtu.be/Z4fx6zwIFx8">
                  nami ca searchmentalhealth presentation
                </Link>
              </li>
            </ul>
              
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  color: 'gray',
                }}
                to="/"
              >
                ← take me homeeee
              </Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
