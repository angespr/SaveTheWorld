import '../../styles/view-post/ViewPost.css';
import Header from '../Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewPost() {  
  const { requestId } = useParams();  // Capture requestId from URL
  const [postData, setPostData] = useState(null);
  const [authorName, setAuthorName] = useState(null);
  
  // Modal state and form fields
  const [showModal, setShowModal] = useState(false);
  const [offerText, setOfferText] = useState('');
  const [serviceType, setServiceType] = useState('');
  
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

  const handleMakeOfferClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleOfferSubmit = (e) => {
    e.preventDefault();
    // Handle the offer submission logic here
    console.log("Offer Submitted:", offerText, serviceType);
    // Close the modal after submission
    setShowModal(false);
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

        <button className="submit-btn" onClick={handleMakeOfferClick}>
          Make an Offer
        </button>

        {/* Modal for Making Offer */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="modal-close" onClick={handleModalClose}>×</span>
              <h3>Make an Offer</h3>
              <form onSubmit={handleOfferSubmit}>
                <div>
                  <label htmlFor="offerText">Offer Description:</label>
                  <textarea
                    id="offerText"
                    value={offerText}
                    onChange={(e) => setOfferText(e.target.value)}
                    placeholder="Describe your offer..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="serviceType">Type of Service:</label>
                  <select
                    id="serviceType"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    required
                  >
                    <option value="">Select a service type</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Art">Art</option>
                    <option value="Fiber Arts">Fiber Arts</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Pets">Pets</option>
                    <option value="Education">Education</option>
                    <option value="Cooking/Baking">Cooking/Baking</option>
                    <option value="Manual Labor">Manual Labor</option>
                  </select>
                </div>
                <div className="modal-actions">
                  <button type="submit" className="submit-btn">Submit Offer</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewPost;
