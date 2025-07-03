import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const getInitialDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('darkMode') === 'true';
  }
  return false;
};

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode);

  // Save mode
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // 🔁 Refresh AOS on theme toggle
  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default App;
