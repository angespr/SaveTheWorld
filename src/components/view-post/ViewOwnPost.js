import '../../styles/view-post/ViewOwnPost.css';
import Header from '../Header';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ViewOwnPost() {
  
  const { requestId } = useParams();  // Capture requestId from URL
  const navigate = useNavigate();

  const [postData, setPostData] = useState(null);
  const [authorName, setAuthorName] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedOfferDescription, setUpdatedOfferDescription] = useState('');
  const [updatedCategory, setUpdatedCategory] = useState('');
  const [updatedExpectedValue, setUpdatedExpectedValue] = useState('');

  const fetchData = async () => {
    try {
      // Fetch post data
      const postResponse = await fetch(`https://juvoproject.com/api/requests/${requestId}`);
      if (postResponse.ok) {
        const data = await postResponse.json();
        setPostData(data);
        setUpdatedTitle(data.title);
        setUpdatedDescription(data.requestDescription);
        setUpdatedOfferDescription(data.offerDescription);
        setUpdatedCategory(data.category);
        setUpdatedExpectedValue(data.expectedValue);
  
        // Check if the request is active
        const isCompleted = data.isActive === false;
  
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
  
        // Update the state to show completed status (isActive)
        setIsCompleted(isCompleted); // This will be used for the button text condition
      } else {
        console.error('Failed to fetch post details');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };
  

  useEffect(() => {
    fetchData(); // Initial data fetch on mount
  }, [requestId]); // Run this effect when requestId changes

  const handleSave = async () => {
    // Prepare the updated data
    const updatedData = {
      title: updatedTitle,
      requestDescription: updatedDescription,
      offerDescription: updatedOfferDescription,
      expectedValue: updatedExpectedValue,
      category: updatedCategory,
    };

    try {
      const response = await fetch(`https://juvoproject.com/api/requests/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const message = await response.text();
        alert("Request updated successfully! 🎉");
        setIsEditing(false);
        
        // Refetch the data after the update
        fetchData();
      } else {
        alert("Failed to update request ❌");
        console.error(await response.text());
      }
    } catch (err) {
      console.error("Error updating request:", err);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this request?');

    if (confirmed) {
      try {
        const response = await fetch(`https://juvoproject.com/api/requests/${requestId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Request deleted successfully!');
          navigate('/'); // Redirect to homepage or another page after deletion
        } else {
          alert('Failed to delete request ❌');
        }
      } catch (err) {
        console.error('Error deleting request:', err);
        alert('Error deleting request ❌');
      }
    }
  };

  const handleComplete = async () => {
    const confirmed = window.confirm('Are you sure you want to mark this request as completed?');
  
    if (confirmed) {
      try {
        const response = await fetch(`https://juvoproject.com/api/requests/${requestId}/complete`, {
          method: 'PUT',
        });
  
        if (response.ok) {
          alert('Request marked as completed!');
          // Refetch the data after the update
          fetchData();
        } else {
          alert('Failed to mark request as completed ❌');
        }
      } catch (err) {
        console.error('Error completing request:', err);
        alert('Error completing request ❌');
      }
    }
  };
  
  const handleReActivate = async () => {
    const confirmed = window.confirm('Are you sure you want to reactivate this request?');
  
    if (confirmed) {
      try {
        const response = await fetch(`https://juvoproject.com/api/requests/${requestId}/reactivate`, {
          method: 'PUT',
        });
  
        if (response.ok) {
          alert('Request reactivated!');
          // Refetch the data after the update
          fetchData();
        } else {
          alert('Failed to reactivate request ❌');
        }
      } catch (err) {
        console.error('Error reactivating request:', err);
        alert('Error reactivating request ❌');
      }
    }
  };  

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-post">
      <Header />
      <div className="view-post-container">
        <h2 className="post-title">
          {isEditing ? (
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          ) : (
            postData.title
          )}
        </h2>
        <p className="post-description">
          {isEditing ? (
            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          ) : (
            postData.requestDescription
          )}
        </p>
        <p className="post-user">by {authorName}</p>

        <h3 className="section-header">My Offer:</h3>
        <p className="offer-description">
          {isEditing ? (
            <textarea
              value={updatedOfferDescription}
              onChange={(e) => setUpdatedOfferDescription(e.target.value)}
            />
          ) : (
            postData.offerDescription
          )}
        </p>

        <h3 className="section-header">Thumbnail:</h3>
        <img className="gallery-image" src={postData.imageUrl} alt="Thumbnail" />

        <h3 className="section-header">Category:</h3>
        <div className="category-tag">
          {isEditing ? (
            <select
              value={updatedCategory}
              onChange={(e) => setUpdatedCategory(e.target.value)}
            >
              <option value="Beauty">Beauty</option>
              <option value="Art">Art</option>
              <option value="Fiber Arts">Fiber Arts</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Pets">Pets</option>
            </select>
          ) : (
            postData.category
          )}
        </div>

        <h3 className="section-header">Estimated Monetary Value:</h3>
        <div className="monetary-value">
          {isEditing ? (
            <input
              type="number"
              value={updatedExpectedValue}
              onChange={(e) => setUpdatedExpectedValue(e.target.value)}
            />
          ) : (
            `$${postData.expectedValue}`
          )}
        </div>

        <div className="own-post-buttons">
          <button className="update-btn" onClick={() => { 
            if (isEditing) {
              handleSave(); // Save changes when in editing mode
            } else {
              setIsEditing(true); // Switch to editing mode
            }
          }}>
            {isEditing ? "Save" : "Update Request"}
          </button>

          <button className="delete-btn" onClick={handleDelete}>
            Delete Request
          </button>
        </div>
        <button 
          className="complete-btn" 
          onClick={isCompleted ? handleReActivate : handleComplete}>
          {isCompleted ? "Mark as Active" : "Mark as Completed"}
        </button>

      </div>
    </div>
  );
}

export default ViewOwnPost;
