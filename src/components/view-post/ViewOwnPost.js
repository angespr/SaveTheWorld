import '../../styles/view-post/ViewPost.css';
import Header from '../Header';
import React, { useState } from 'react';

function ViewOwnPost() {
  const [galleryImages] = useState([
    '/test_hair1.jpg',
    '/test_hair2.jpg',
    '/test_hair3.jpg',
  ]);

  return (
    <div className="view-post">
      <Header />
      <div className="view-post-container">
        <h2 className="post-title">Request Title</h2>
        <p className="post-description">
          This is the description of the request. It explains what the requester is asking for in detail.
        </p>
        <p className="post-user">by You</p>

        <h3 className="section-header">My Offer:</h3>
        <p className="offer-description">
          This is the description of the service or product you are offering in return.
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

        <div className="own-post-buttons">
          <button className="submit-btn">Update Request</button>
          <button className="delete-btn">Delete Request</button>
        </div>
      </div>
    </div>
  );
}

export default ViewOwnPost;