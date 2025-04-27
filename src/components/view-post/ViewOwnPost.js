import '../../styles/view-post/ViewOwnPost.css';
import Header from '../Header';
import React, { useState } from 'react';

function ViewOwnPost() {
  const [galleryImages] = useState([
    '/test_garden1.jpg',
    '/test_garden2.jpg',
    '/test_garden3.jpg',
  ]);

  return (
    <div className="view-post">
      <Header />
      <div className="view-post-container">
        <h2 className="post-title">Looking for a full-body massage!</h2>
        <p className="post-description">
          I'm in need of a massage because of how much yardwork I've been doing lately. I would like to get a 30-45 minute massage for my full-body.
        </p>
        <p className="post-user">by Evelyn</p>

        <h3 className="section-header">My Offer:</h3>
        <p className="offer-description">
          I've been doing gardening for 14+ years now, and I can do weeding, gardening, and give you advice on the best practices to keep your plots healthy!
        </p>

        <h3 className="section-header">Gallery:</h3>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
          ))}
        </div>

        <h3 className="section-header">Category:</h3>
        <div className="category-tag">Outdoor</div>

        <h3 className="section-header">Estimated Monetary Value:</h3>
        <div className="monetary-value">$80</div>

        <div className="own-post-buttons">
          <button className="update-btn">Update Request</button>
          <button className="delete-btn">Delete Request</button>
        </div>
      </div>
    </div>
  );
}

export default ViewOwnPost;