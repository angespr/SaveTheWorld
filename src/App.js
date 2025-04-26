import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import UserProfile from './components/userProfile/userProfile';
import CreateRequest from './components/create-requests/CreateRequest';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create-request" element={<CreateRequest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
