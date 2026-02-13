import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 backdrop-blur border-b px-3 py-3 sm:p-4 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-2 sm:gap-4">
        <a href="#home" className="text-lg sm:text-2xl font-bold leading-tight">
          Ali Saker <span className="text-blue-500 text-[10px] sm:text-sm block">Full-Stack Developer</span>
        </a>

        <div className="flex items-center space-x-2 sm:space-x-6 text-sm sm:text-base">
          <a href="#about" className="hover:text-blue-500 transition-colors hidden md:inline">About</a>
          <a href="#portfolio" className="hover:text-blue-500 transition-colors hidden md:inline">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors hidden md:inline">Contact</a>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors"
          >
            Hire Me
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors text-sm sm:text-base ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙' : '🌞'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
