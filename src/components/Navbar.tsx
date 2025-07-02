import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
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
  );
};

export default Navbar;
