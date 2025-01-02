import React, { useState } from 'react';
import photos from './importAllPhotos';
import './App.css';
import { Link } from 'react-router-dom';

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
      <p className="photographing2020">BTW, I also did a lil social-justice photo project in 2020 that you can check out <a href="https://photographing2020.onuniverse.com/" target="_blank">here</a>.
    </p>
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
      <div style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '40px' }}>
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
  );
}

export default Photos;
