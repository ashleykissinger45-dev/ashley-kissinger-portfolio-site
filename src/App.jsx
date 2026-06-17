import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/portfolio-site' || location.pathname === '/portfolio-site/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const backgroundStyle = {
    backgroundImage: `url(/sitebackground.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    filter: 'saturate(0.88) brightness(1.35) contrast(1.16)'
  };
  
  const overlayStyle = {
    backgroundColor: isHomePage ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.7s ease'
  };

  return (
    <>
      <div className="app-background" style={backgroundStyle}></div>
      <div className="app-overlay" style={overlayStyle}></div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <footer className="footer">
          <p>Ashley Kissinger · 2026</p>
        </footer>
      </div>
    </>
  );
}

function App() {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

export default App;