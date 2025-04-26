import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import React, { useState, useEffect } from 'react';

function Homepage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/requests');
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);
  return (
    <div className="homepage">
      <Header />
      <div className="requests-list">
        {requests.length > 0 ? (
          requests.map((req) => (
            <div key={req.id} className="request-card">
              <h3>{req.title}</h3>
              <p><strong>Request:</strong> {req.requestDescription}</p>
              <p><strong>Offer:</strong> {req.offerDescription}</p>
              <p><strong>Category:</strong> {req.category}</p>
              <p><strong>Expected Value:</strong> ${req.expectedValue}</p>
            </div>
          ))
        ) : (
          <p>No trade requests found yet.</p>
        )}
      </div>
    </div>
  );
}
export default Homepage;