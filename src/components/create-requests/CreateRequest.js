import '../../styles/create-requests/CreateRequest.css';
import Header from '../Header';
import React, { useState } from 'react';

function CreateRequest() {
  /* form states */
  const [requestTitle, setRequestTitle] = useState('');
  const [requestDescription, setRequestDescription] = useState('');
  const [exchangeOffer, setExchangeOffer] = useState('');
  const [requestCategory, setRequestCategory] = useState('General');
  const [expectedValue, setExpectedValue] = useState('');
  const [images, setImages] = useState([]);

  /*image upload */
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  /*form submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Request Submitted:', {
      requestTitle,
      requestDescription,
      exchangeOffer,
      requestCategory,
      expectedValue,
      images,
    });
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
          <button type="submit" className="submit-btn">Submit Listing</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRequest;