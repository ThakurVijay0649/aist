import React from 'react'
import {BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import Chatbot from './Components/Chatbot';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import "./Styles/App.scss"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Chatbot/>
      <Footer/>
    </Router>
  );
}

export default App;
