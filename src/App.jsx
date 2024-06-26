// import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Expirience/Experience';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Footer />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience/>} />
          {/* <Route path="/footer" element={<Footer />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;