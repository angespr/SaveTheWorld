import '../../styles/view-post/ViewPost.css';
import Header from '../Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewPost() {
  /* gallery images for the post */
  const [galleryImages, setGalleryImages] = useState([
    '/test_hair1.jpg',
    '/test_hair2.jpg',
    '/test_hair3.jpg',
  ]);
  
  const { requestId } = useParams();  // Capture requestId from URL
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await fetch(`http://198.244.96.156:8080/api/requests/${requestId}`);
      if (response.ok) {
        const data = await response.json();
        setPostData(data);
      } else {
        console.error('Failed to fetch post details');
      }
    };
    fetchPostData();
  }, [requestId]);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-post">
      <Header />
      <div className="view-post-container">
        <h2 className="post-title">{postData.title}</h2>
        <p className="post-description">{postData.requestDescription}</p>
        <p className="post-user">by {postData.userId}</p>

        <h3 className="section-header">My Offer:</h3>
        <p className="offer-description">{postData.offerDescription}</p>

        <h3 className="section-header">Gallery:</h3>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
          ))}
        </div>

        <h3 className="section-header">Category:</h3>
        <div className="category-tag">{postData.category}</div>

        <h3 className="section-header">Estimated Monetary Value:</h3>
        <div className="monetary-value">${postData.expectedValue}</div>

        <button className="submit-btn">Make an Offer</button>
      </div>
    </div>
  );
}

export default ViewPost;
