import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null); // null initially

  // Load dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode === 'true');
  }, []);

  // Save dark mode to localStorage when it changes
  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem('darkMode', String(darkMode));
    }
  }, [darkMode]);

  // AOS animation init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Avoid rendering until darkMode is loaded
  if (darkMode === null) return null;

  // Safe cast after null check
  const dark = darkMode;
  const setDark = setDarkMode as React.Dispatch<React.SetStateAction<boolean>>;

  return (
    <div className={dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      <Navbar darkMode={dark} setDarkMode={setDark} />
      <Hero darkMode={dark} />
      <About darkMode={dark} />
      <Portfolio darkMode={dark} />
      <Contact darkMode={dark} />
    </div>
  );
};

export default App;
