import React from 'react';
import '../App.css';
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
    'Kaua\'i, Hawaii',
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
    'Providence, Rhode Island',
    'Taiwan',
    'Tokyo, Japan',
    'Kyoto, Japan',
    'Brooklyn',
  ];

  const sortedPlaces = places.sort((a, b) => a.localeCompare(b));

  return (
    <div className="App">
      <div className="content-container">
        <p className="intro-text">
          I love exploring! Hoping to travel to as many places around Earth (and maybe...Mars?!!) as humanly possible before I die. Here's some places I've been fortunate to visit:
        </p>
        
        <ul className="clean-list" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '0.5rem'
        }}>
          {sortedPlaces.map((place, index) => (
            <li key={index} className="list-item-small">
              {place}
            </li>
          ))}
        </ul>
        <div className="nav-back">
          <Link className="nav-link" to="/">
            ← back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlacesTraveled;
