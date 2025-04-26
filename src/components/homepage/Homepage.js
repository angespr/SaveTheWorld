import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import SearchBar from './SearchBar';
import Recommended from './Recommended';
import Requests from './Requests';
import React from 'react';

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <Recommended />
      <Requests />
    </div>
  );
}
export default Homepage;