import React from 'react';
import images from './importAll';
import './App.css';

function Faces() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="grid-container">
          {images.map((image, index) => (
            <div key={index} className="grid-item-container">
              <img
                src={image.src}
                alt={`Face drawing ${index + 1}`}
                className="grid-item"
              />
              <div className="image-label">
                {image.filename}
                </div>
            </div>
          ))}
          <div className="grid-item-container">
              <img src="./char_and_face.jpg" className="grid-item" alt="Description of image" />
              <div className="image-label">My first face drawing at age 7</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Faces;
