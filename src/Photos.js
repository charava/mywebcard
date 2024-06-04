import React, { useState } from 'react';
import photos from './importAllPhotos';
import './App.css';

function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="grid-container">
          {photos.map((image, index) => (
            <div key={index} className="grid-item-container" onClick={() => handleImageClick(image)}>
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
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage.src} alt="Selected" className="modal-image" />
            <div className="modal-label">
              {selectedImage.name} - {selectedImage.location} - {selectedImage.date}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Photos;
