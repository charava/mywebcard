import React, { useState } from 'react';
import art from '../importAllArt';
import '../App.css';
import { Link } from 'react-router-dom';

function Art() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="main-container flex-start">
        <p className="photographing2020">A collection of my art pieces - drawings, sketches, and other creative experiments.</p>
        <div className="grid-container">
          {art.map((image, index) => (
            <div key={index} className="grid-item-container" onClick={() => handleImageClick(image)}>
              <img
                src={image.src}
                alt={`Art ${index + 1}`}
                className="grid-item"
              />
              <div className="image-label">
                {image.name} {image.medium && `- ${image.medium}`} {image.date && `- ${image.date}`}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage.src} alt="Selected" className="modal-image" />
            <div className="modal-label">
              {selectedImage.name} {selectedImage.medium && `- ${selectedImage.medium}`} {selectedImage.date && `- ${selectedImage.date}`}
            </div>
          </div>
        </div>
      )}
      <div className="nav-back-home">
        <Link className="nav-link" to="/">
          ← back
        </Link>
      </div>
    </div>
  );
}

export default Art; 