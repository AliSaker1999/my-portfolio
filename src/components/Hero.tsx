import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      className={`hero min-h-screen pt-20 flex flex-col justify-center items-center text-center relative px-4 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-100 to-white'
      }`}
      data-aos="fade-up"
    >
      <div className="relative z-10">
        <h1 className={`text-5xl sm:text-6xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Hi, I'm Ali Saker
        </h1>

        <div className={`text-xl sm:text-2xl font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
          <TypeAnimation
            key={darkMode ? 'dark' : 'light'}
            sequence={[
              'I build web applications.', 1500,
              'I solve real-world problems with code.', 1500,
              'I develop full-stack solutions.', 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="mt-8">
          <a
            href="#portfolio"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg transition duration-300"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
