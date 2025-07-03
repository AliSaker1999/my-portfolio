import React from 'react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      className="hero min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
      data-aos="fade-up"
    >
      <div className={`absolute inset-0 ${darkMode ? 'bg-black opacity-50' : 'bg-white opacity-80'}`}></div>
      <div className="relative z-10">
        <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Hi, I'm Ali Saker
        </h2>
        <p className={`text-xl mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          I build amazing things with code
        </p>
        <a
          href="#portfolio"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
