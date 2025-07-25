import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import './HamburgerMenu.css';

function App() {
  return (
    <Router>
      <HamburgerMenu />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
