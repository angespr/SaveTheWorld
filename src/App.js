import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
