import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`hero min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center relative px-4 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'
      }`}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 px-3 sm:px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 font-semibold text-xs sm:text-sm leading-relaxed">
            Full Stack Web Developer • Beirut • Open to new opportunities
          </span>

          <h1 className={`text-3xl sm:text-6xl font-extrabold mb-4 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            I engineer production-ready systems that drive real business outcomes.
          </h1>

          <p className={`text-base sm:text-xl mb-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I’m Ali Saker, a Full Stack Web Developer at Gezairi Group building scalable logistics software across frontend, backend, APIs, and data.
          </p>

          <div className={`text-base sm:text-2xl font-medium min-h-[68px] sm:min-h-[44px] ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          <TypeAnimation
            key={darkMode ? 'dark' : 'light'}
            sequence={[
              'Node.js + TypeScript + Express Architecture', 1500,
              'React + Redux/Saga Workflow Interfaces', 1500,
              'SQL Design, Migrations, and Data Integrity', 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a
              href="#portfolio"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors text-center w-full sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-lg text-base font-semibold border transition-colors text-center w-full sm:w-auto ${
                darkMode
                  ? 'border-gray-600 text-white hover:bg-gray-800'
                  : 'border-gray-300 text-gray-900 hover:bg-gray-100'
              }`}
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className={`rounded-xl p-4 border ${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'}`}>
              <p className="text-xl sm:text-2xl font-bold text-blue-500">2+ Years</p>
              <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>Professional Experience</p>
            </div>
            <div className={`rounded-xl p-4 border ${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'}`}>
              <p className="text-xl sm:text-2xl font-bold text-blue-500">End-to-End</p>
              <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>Architecture to Deployment</p>
            </div>
            <div className={`rounded-xl p-4 border ${darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'}`}>
              <p className="text-xl sm:text-2xl font-bold text-blue-500">RBAC + APIs</p>
              <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>Secure Scalable Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
