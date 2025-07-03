import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Hero from './components/Hero';

const App = () => {
  // Set dark mode to true by default, and persist in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; // If the value in localStorage is 'true', use dark mode
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    // Persist dark mode preference in localStorage
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      {/* Navbar Component */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <Hero darkMode={darkMode} />


      {/* About Section */}
      <About darkMode={darkMode} />

      {/* Portfolio Section */}
      <Portfolio darkMode={darkMode} />

      {/* Contact Section */}
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default App;
