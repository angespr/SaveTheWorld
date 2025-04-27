import '../../styles/view-post/ViewPost.css';
import Header from '../Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewPost() {  
  const { requestId } = useParams();  // Capture requestId from URL
  const [postData, setPostData] = useState(null);
  const [authorName, setAuthorName] = useState(null);

  const fetchData = async () => {
    try {
      // Fetch post data
      const postResponse = await fetch(`https://juvoproject.com/api/requests/${requestId}`);
      if (postResponse.ok) {
        const data = await postResponse.json();
        setPostData(data);
  
        // Fetch author data if post is found
        const userResponse = await fetch(`https://juvoproject.com/api/users/${data.userId}`);
        if (userResponse.ok) {
          const userData = await userResponse.json();
          // Extract only the first word from the name
          const firstName = userData.name.split(' ')[0];
          setAuthorName(firstName);  // Set only the first word
        } else {
          console.error('Failed to fetch author details');
        }
      } else {
        console.error('Failed to fetch post details');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  useEffect(() => {
      fetchData();
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
        <p className="post-user">by {authorName}</p>

        <h3 className="section-header">My Offer:</h3>
        <p className="offer-description">{postData.offerDescription}</p>

        <h3 className="section-header">Thumbnail:</h3>
        <img className="gallery-image" src={postData.imageUrl} alt="Thumbnail" />

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
