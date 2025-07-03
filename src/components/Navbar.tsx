import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`fixed w-full top-0 left-0 z-50 shadow-md p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Ali Saker <span className="text-blue-500 text-sm block">Full-Stack Developer</span>
        </h1>
        
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
