import '../../styles/create-requests/CreateRequest.css';
import Header from '../Header';
import { getUserIdFromToken } from '../../utility/AuthUtil';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function CreateRequest() {
  const [requestTitle, setRequestTitle] = useState('');
  const [requestDescription, setRequestDescription] = useState('');
  const [exchangeOffer, setExchangeOffer] = useState('');
  const [requestCategory, setRequestCategory] = useState('General');
  const [expectedValue, setExpectedValue] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const userId = getUserIdFromToken();

  if (!userId) {
    navigate('/login');
    return null;
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'JuvoImages');
      formData.append('folder', 'juvo/requests');

      const response = await fetch('https://api.cloudinary.com/v1_1/dg1dhp4g3/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      const uploadedImageUrl = data.secure_url;

      console.log("uploaded image url", uploadedImageUrl);
  
      const payload = {
        title: requestTitle,
        requestDescription: requestDescription,
        offerDescription: exchangeOffer,
        expectedValue: parseFloat(expectedValue) || 0,
        category: requestCategory,
        userId: userId,
        imageUrl: uploadedImageUrl,
      };

      console.log("payload", payload);
      
      const postResponse = await fetch('http://localhost:8080/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (postResponse.ok) {
        const message = await postResponse.text();
        alert("Listing posted successfully! 🎉");
        console.log(message);
  
        setRequestTitle('');
        setRequestDescription('');
        setExchangeOffer('');
        setRequestCategory('General');
        setExpectedValue('');
        setImage('');

        navigate('/');
      } else {
        alert("Failed to post listing ❌");
        console.error(await postResponse.text());
      }
    } catch (err) {
      console.error("Error posting listing:", err);
    }
  };

  return (
    <div className="create-request">
      <Header />
      <div className="create-request-container">
        <h2 className="create-request-title">Create a Listing</h2>
        <form onSubmit={handleSubmit} className="create-request-form">
          <div className="form-group">
            <label htmlFor="title">Request Title:</label>
            <input
              type="text"
              id="title"
              value={requestTitle}
              onChange={(e) => setRequestTitle(e.target.value)}
              placeholder="What are you looking for?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Request Description:</label>
            <textarea
              id="description"
              value={requestDescription}
              onChange={(e) => setRequestDescription(e.target.value)}
              placeholder="Describe what you're requesting"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="exchange">Offer Description:</label>
            <textarea
              id="exchange"
              value={exchangeOffer}
              onChange={(e) => setExchangeOffer(e.target.value)}
              placeholder="Describe the service(s) you're offering"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="expectedValue">Estimated Monetary Value ($):</label>
            <input
              type="number"
              id="expectedValue"
              value={expectedValue}
              onChange={(e) => setExpectedValue(e.target.value)}
              placeholder="e.g. $50"
              min="0"
              step="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Offer Category:</label>
            <select
              id="category"
              value={requestCategory}
              onChange={(e) => setRequestCategory(e.target.value)}
            >
              <option value="Beauty">Beauty</option>
              <option value="Art">Art</option>
              <option value="Fiber Arts">Fiber Arts</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Pets">Pets</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="images">Add an image of your service:</label>
            <input
              type="file"
              id="images"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="image-preview-container">
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="image-preview"
                />
              )}
            </div>
          </div>

          <button type="submit" className="submit-request-btn">Submit Listing</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRequest;
