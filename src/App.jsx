// import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Expirience/Experience';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
    </div>
  );
};

export default App;
