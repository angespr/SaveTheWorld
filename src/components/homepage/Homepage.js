import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import SearchBar from './SearchBar';
import Recommended from './Recommended';
import React from 'react';

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <Recommended />
    </div>
  );
}
export default Homepage;