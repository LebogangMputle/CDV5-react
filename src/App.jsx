// import React from 'react';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Expirience/Experience';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.display = 'block';
      } else {
        footer.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
