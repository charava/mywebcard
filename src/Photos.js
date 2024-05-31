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
                alt={`Face drawing ${index + 1}`}
                className="grid-item"
              />
              {/* <div className="image-label">{image.filename}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;
