import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface PortfolioProps {
  darkMode: boolean;
}

const projects = [
  {
    title: 'Quizify',
    description: 'Full-stack quiz platform with secure login, role-based access, quiz management, and real-time result tracking.',
    impact: 'Demonstrates enterprise-style auth, backend/frontend integration, and reliable user progress workflows.',
    stack: ['ASP.NET Core', 'C#', 'React', 'TypeScript', 'Azure'],
    image: process.env.PUBLIC_URL + '/images/quiz-app.png',
    github: 'https://github.com/AliSaker1999/Quizify',
    demo: 'https://frontend-tan-one-50.vercel.app/',
  },
  {
    title: 'RecipeLand',
    description: 'Full-stack web app with authentication, recipe management, admin dashboard, and AI-assisted suggestions.',
    impact: 'Shows practical AI feature integration with secure CRUD architecture and polished frontend UX.',
    stack: ['ASP.NET Core', 'C#', 'React', 'MongoDB'],
    image: process.env.PUBLIC_URL + '/images/recipe-app.png',
    github: 'https://github.com/AliSaker1999',
    demo: 'https://recipe-beta-bice.vercel.app/',
  },
  {
    title: 'Logistics Platform (Professional)',
    description: 'Architected and delivered a workflow-driven logistics system covering freight operations, container handling, and billing.',
    impact: 'Created scalable operations tooling with modular services, messaging queues, and role-based access control.',
    stack: ['Node.js', 'TypeScript', 'Express', 'React', 'Redux/Saga', 'SQL', 'RabbitMQ'],
    image: process.env.PUBLIC_URL + '/images/portfolio.png',
    github: 'https://github.com/AliSaker1999',
    demo: 'https://www.linkedin.com/in/ali-saker-001a00242/',
  },
  // Add more projects as needed...
];

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  return (
    <section
      id="portfolio"
      className={`py-14 sm:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>
        <p className={`max-w-3xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Projects that highlight my ability to own delivery end-to-end, build scalable systems, and solve real operational challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-48 object-cover"
              />
              <div className="p-5 sm:p-6 flex flex-col justify-between h-auto sm:h-[320px] text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.impact}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 flex justify-start gap-5 sm:gap-6 text-xl">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    <FaGithub title="GitHub" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
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
