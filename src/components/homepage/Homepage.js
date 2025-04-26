import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import SearchBar from './SearchBar';
import Recommended from './Recommended';
import CreateRequest from '../create-requests/CreateRequest';
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
      <SearchBar />
      <Recommended />
      <CreateRequest header="All Requests"/>
    </div>
  );
}
export default Homepage;