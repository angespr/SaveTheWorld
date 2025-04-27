import '../../styles/view-post/ViewOwnPost.css';
import Header from '../Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewOwnPost() {
  const [galleryImages] = useState([
    '/test_garden1.jpg',
    '/test_garden2.jpg',
    '/test_garden3.jpg',
  ]);

  const { requestId } = useParams();  // Capture requestId from URL
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await fetch(`http://localhost:8080/api/requests/${requestId}`);
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

        <div className="own-post-buttons">
          <button className="update-btn">Update Request</button>
          <button className="delete-btn">Delete Request</button>
        </div>
      </div>
    </div>
  );
}

export default ViewOwnPost;