import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import UserProfile from './components/userProfile/UserProfile';
import Login from './components/requests/Login';
import SignUp from './components/userProfile/Signup';
import CreateRequest from './components/create-requests/CreateRequest';
import ViewPost from './components/view-post/ViewPost';
import MyRequests from './components/requests/MyRequests';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create-request" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-requests" element={<CreateRequest />} />
          <Route path="/view-post" element={<ViewPost />} />
          <Route path="/my-requests" element={<MyRequests />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
