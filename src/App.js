import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import UserProfile from './components/userProfile/userProfile';
import CreateRequest from './components/create-requests/CreateRequest';
import ViewPost from './components/view-post/ViewPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create-requests" element={<CreateRequest />} />
          <Route path="/view-post" element={<ViewPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
