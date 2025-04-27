import '../../styles/view-post/ViewPost.css';
import Header from '../Header';
import React, { useState } from 'react';

function ViewPost() {
  /* gallery images for the post */
  const [galleryImages, setGalleryImages] = useState([
    '/test_hair1.jpg',
    '/test_hair2.jpg',
    '/test_hair3.jpg',
  ]);

  return (
    <div className="view-post">
      <Header />
      <div className="view-post-container">
        <h2 className="post-title">Need tutoring service for my child</h2>
        <p className="post-description">
          Hello! I'm a single mother and need tutoring services for my 6-year-old son. He's been having trouble with his reading comprehension and I'm just too busy with other work to help him...
        </p>
        <p className="post-user">by Jennifer</p>

        <h3 className="section-header">My Offer:</h3>
        <p className="offer-description">
        I'm a full-time hairdresser and specialize in highlights and layered cuts! I have a base price for a haircut and how long they'll take, as well as charge extra for coloring.
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
        <div className="monetary-value">$40</div>

        <button className="submit-btn">Make an Offer</button>
      </div>
    </div>
  );
}

export default ViewPost;
