import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function PlacesTraveled() {
  const places = [
    'Boston, Massachusetts',
    'Breckenridge, Colorado',
    'Charlotte, North Carolina',
    'Costa Rica',
    'France',
    'Inian Islands, Alaska',
    'Gustavis, Alaska',
    'Juneau, Alaska',
    'Kaua’i, Hawaii',
    'Maui, Hawaii',
    'Kona, Hawaii',
    'Hilo, Hawaii',
    'Los Angeles',
    'San Diego, California',
    'Santa Barbara, California',
    'Monterey, California',
    'Long Beach, California',
    'Anaheim, California',
    'Carmel, California',
    'Sacramento, California',
    'Lake Tahoe, California',
    'Shasta, California',
    'Fresno, California',
    'San Jose, California',
    'San Francisco, California',
    'Las Vegas, Nevada',
    'Reno, Nevada',
    'London',
    'New Haven, Connecticut',
    'New York City',
    'Oxford, England',
    'Philadelphia, Pennsylvania',
    'Phoenix, Arizona',
    'Plymouth Notch, Vermont',
    'Portland, Oregon',
    'Porto, Portugal',
    'Lisbon, Portugal',
    'Aveiro, Portugal',
    'Algarve, Portugal',
    'Princeton, New Jersey',
    'Rome, Italy',
    'Positano, Italy',
    'Florence, Italy',
    'Venice, Italy',
    'Sorrento, Italy',
    'Capri, Italy',
    'Salt Lake City, Utah',
    'San Antonio, Texas',
    'Houston, Texas',
    'Vancouver',
    'Washington D.C.',
    'Wyoming',
    'Providence, Rhode Island'
  ];

  const sortedPlaces = places.sort((a, b) => a.localeCompare(b));

  return (
    <div className="App">
      <div className="main-container">
        <div>
          <p>I love exploring! Hoping to travel to as many places around Earth (and maybe...Mars?!!) as humanly possible before I die. Here's some places I've been fortunate to visit:</p>
          
          <ul>
            {sortedPlaces.map((place, index) => (
              <li key={index}>
                {place}
              </li>
            ))}
          </ul>
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
    </div>
  );
}

export default PlacesTraveled;
