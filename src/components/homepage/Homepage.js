import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import SearchBar from './SearchBar';
import Recommended from './Recommended';
import Requests from '../requests/Requests';
import React from 'react';

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <Recommended />
      <Requests header="All Requests"/>
    </div>
  );
}
export default Homepage;