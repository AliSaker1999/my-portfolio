import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface PortfolioProps {
  darkMode: boolean;
}

const projects = [
  {
    title: 'Quiz App',
    description: 'A full-stack quiz app with JWT, React, and ASP.NET Core.',
    image: process.env.PUBLIC_URL + '/images/quiz-app.png',
    github: 'https://github.com/AliSaker1999/Quizify',
    demo: 'https://quiz-frontend.netlify.app/',
  },
  {
    title: 'Recipe Manager',
    description: 'Manage recipes and users with secure authentication.',
    image: process.env.PUBLIC_URL + '/images/recipe-app.png',
    github: 'https://github.com/AliSaker1999/AliSakr',
    demo: 'https://recipe-frontend.netlify.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'My own professional portfolio built with React and Tailwind CSS.',
    image: process.env.PUBLIC_URL + '/images/portfolio.png',
    github: 'https://github.com/AliSaker1999/my-portfolio',
    demo: 'https://alisaker1999.github.io/my-portfolio/',
  },
  // Add more projects as needed...
];

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  return (
    
    <section
      id="portfolio"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className={`text-4xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[250px]">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 dark:text-gray-300 text-sm">{project.description}</p>
                </div>
                <div className="mt-6 flex justify-center gap-6 text-xl">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    <FaGithub title="GitHub" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                    <FaExternalLinkAlt title="Live Demo" />
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
