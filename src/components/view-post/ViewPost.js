import '../../styles/view-post/ViewPost.css';
import Header from '../Header';
import React, { useState } from 'react';

function ViewPost() {
  // find images for this
  const [galleryImages, setGalleryImages] = useState([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ]);

  return (
    <div className="view-post">
      <Header />
      <div className="view-post-container">
        <h2 className="post-title">Request Title</h2>
        <p className="post-description">
          This is the description of the request. It explains what the requester is asking for in detail.
        </p>
        <p className="post-user">by USER</p>

        <h3 className="section-header">My Offer:</h3>
        <p className="offer-description">
          This is the description of the service or product the user is offering in return.
        </p>

        <h3 className="section-header">Gallery:</h3>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
          ))}
        </div>

        <h3 className="section-header">Category:</h3>
        <div className="category-tag">Beauty</div>

        <h3 className="section-header">Estimated Monetary Value:</h3>
        <div className="monetary-value">$50</div>

        <button className="submit-btn">Make an Offer</button>
      </div>
    </div>
  );
}

export default ViewPost;