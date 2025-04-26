import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import UserProfile from './components/userProfile/userProfile';
import CreateRequests from './components/create-requests/CreateRequest';
// import profile
// import create-request

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create-requests" element={<CreateRequests />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
