import React from 'react';
import photos from './importAllPhotos';
import './App.css';

function Photos() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="grid-container">
          {photos.map((image, index) => (
            <div key={index} className="grid-item-container">
              <img
                src={image.src}
                alt={`Photo ${index + 1}`}
                className="grid-item"
              />
              <div className="image-label">
                {image.name} - {image.location} - {image.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;
