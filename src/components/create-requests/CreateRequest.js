import '../../styles/create-requests/CreateRequest.css';
import Header from '../Header';
import { getUserIdFromToken } from '../../utility/AuthUtil';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function CreateRequest() {
  /* form states */
  const [requestTitle, setRequestTitle] = useState('');
  const [requestDescription, setRequestDescription] = useState('');
  const [exchangeOffer, setExchangeOffer] = useState('');
  const [requestCategory, setRequestCategory] = useState('General');
  const [expectedValue, setExpectedValue] = useState('');
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const userId = getUserIdFromToken();

  if (!userId) {
    window.location.href = 'http://localhost:3000/#/login';
    return null;
  }

  /* image upload */
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  /* form submit */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: requestTitle,
      requestDescription: requestDescription,
      offerDescription: exchangeOffer,
      expectedValue: parseFloat(expectedValue) || 0,
      category: requestCategory,
      userId: userId
    };

    try {
      const response = await fetch('http://localhost:8080/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const message = await response.text();
        alert("Listing posted successfully! 🎉");
        console.log(message);

        // Reset form
        setRequestTitle('');
        setRequestDescription('');
        setExchangeOffer('');
        setRequestCategory('General');
        setExpectedValue('');
        setImages([]);

        // Redirect to homepage
        navigate('/');
      } else {
        alert("Failed to post listing ❌");
        console.error(await response.text());
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
            <label htmlFor="images">Add image(s) of your service:</label>
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="image-preview-container">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`preview ${index}`}
                  className="image-preview"
                />
              ))}
            </div>
          </div>

          <button type="submit" className="submit-request-btn">Submit Listing</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRequest;
