import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

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
      <section
        className="hero min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Hi, I'm Ali Saker</h2>
          <p className="text-xl text-white mb-6">I build amazing things with code</p>
          <a href="#portfolio" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600">See My Work</a>
        </div>
      </section>

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
