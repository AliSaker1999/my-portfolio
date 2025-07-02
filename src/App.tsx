import React, { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      {/* Navbar */}
      <nav className="fixed w-full bg-transparent top-0 left-0 z-50 shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
              {darkMode ? '🌙' : '🌞'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Hi, I'm [Your Name]</h2>
          <p className="text-xl text-white mb-6">I build amazing things with code</p>
          <a href="#portfolio" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600">See My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">I'm a passionate developer who loves creating web applications. With a background in full-stack development, I enjoy solving problems and building intuitive user interfaces.</p>
          <p className="text-lg text-gray-700 mb-4">I specialize in React, Node.js, and Python. I'm always eager to learn new technologies and improve my skills.</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
              <p className="text-lg mb-4">Description of the project goes here.</p>
              <a href="#" className="text-blue-500 hover:underline">View Details</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
              <p className="text-lg mb-4">Description of the project goes here.</p>
              <a href="#" className="text-blue-500 hover:underline">View Details</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Project 3</h3>
              <p className="text-lg mb-4">Description of the project goes here.</p>
              <a href="#" className="text-blue-500 hover:underline">View Details</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-6">Feel free to reach out for collaboration or any inquiries.</p>
          <p className="text-lg text-gray-700">Email: example@example.com</p>
        </div>
      </section>
    </div>
  );
};

export default App;
