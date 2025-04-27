import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import UserProfile from './components/userProfile/UserProfile';
import Login from './components/userProfile/Login';
import SignUp from './components/userProfile/Signup';
import CreateRequest from './components/create-requests/CreateRequest';
import ViewPost from './components/view-post/ViewPost';
import MyRequests from './components/requests/MyRequests';
import ViewOwnPost from './components/view-post/ViewOwnPost';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Private Routes */}
          <Route path="/" element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          } />
          <Route path="/create-request" element={
            <PrivateRoute>
              <CreateRequest />
            </PrivateRoute>
          } />
          {/* Dynamic Route for ViewPost */}
          <Route path="/view-post/:requestId" element={
            <PrivateRoute>
              <ViewPost />
            </PrivateRoute>
          } />
          {/* Dynamic Route for ViewOwnPost */}
          <Route path="/my-post/:requestId" element={
            <PrivateRoute>
              <ViewOwnPost />
            </PrivateRoute>
          } />
          <Route path="/my-requests" element={
            <PrivateRoute>
              <MyRequests />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
