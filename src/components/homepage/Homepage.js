import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import SearchBar from './SearchBar';
import React from 'react';

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
    </div>
  );
}
export default Homepage;