import '../../styles/homepage/Homepage.css';
import Logo from '../../assets/logo.png';
import Profile from '../../assets/profile.png';
import SearchBar from './SearchBar';
import React from 'react';

function Homepage() {
  return (
    <div className="homepage">
      <div className="header">
        <div className="header-left">
          <img src={Logo} alt="Logo" className="logo header-img" />
          <h1 className="title">juvo</h1>
        </div>
        <img src={Profile} alt="Profile" className="profile header-img" />
      </div>
      <SearchBar />
    </div>
  );
}
export default Homepage;