import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaDatabase, FaPython, FaAndroid } from 'react-icons/fa';
import { SiTypescript, SiSharp, SiTailwindcss, SiDotnet, SiRedux, SiRabbitmq, SiMongodb, SiMysql, SiPhp, SiLaravel } from 'react-icons/si';


interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-14 sm:py-20 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">About Me</h2>
        <p className={`text-center text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          I’m <span className="font-semibold text-blue-500">Ali Saker</span>, a full-stack developer with hands-on experience shipping business-critical systems in logistics and eCommerce. I focus on scalable architecture, clean code, and reliable delivery from planning to production.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className={`rounded-xl border p-5 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className="font-semibold mb-2">Backend Strength</h3>
            <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>Node.js, TypeScript, Express, RBAC, RabbitMQ, and production-safe data workflows.</p>
          </div>
          <div className={`rounded-xl border p-5 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className="font-semibold mb-2">Frontend Quality</h3>
            <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>React interfaces with Redux/Saga, responsive workflows, and practical UX for operations teams.</p>
          </div>
          <div className={`rounded-xl border p-5 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className="font-semibold mb-2">Delivery Mindset</h3>
            <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>Ownership from stakeholder requirements through deployment, testing foundations, and stability.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Work Experience</h3>
            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-blue-500">Full Stack Web Developer • Gezairi Group</h4>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Beirut | Jan 2026 – Present</p>
                <ul className={`list-disc pl-5 space-y-1 text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Architected and launched an end-to-end logistics platform from requirements to production.</li>
                  <li>Engineered modular backend services with Node.js, TypeScript, Express, RabbitMQ, jobs, and RBAC.</li>
                  <li>Built React + Redux/Saga workflows for ocean freight, container management, and billing operations.</li>
                  <li>Designed SQL schemas, handled production-safe migrations, and resolved complex integrity issues.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-500">Full Stack Web Developer • Paramount</h4>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Sin El Fil | Jul 2024 – Dec 2025</p>
                <ul className={`list-disc pl-5 space-y-1 text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Developed eCommerce systems using ASP.NET, Laravel, React, and SQL Server.</li>
                  <li>Implemented JWT and OAuth authentication with secure API integrations.</li>
                  <li>Applied SEO practices, deployed on cloud/shared hosting, and collaborated in Agile teams.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Education</h3>
              <ul className={`space-y-2 text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li><span className="font-semibold">Bachelor’s in Computer Science</span> — Lebanese University, Al Hadath (2022–2024)</li>
                <li><span className="font-semibold">Bachelor’s in Pure Math</span> — Lebanese University, Al Hadath (2017–2020)</li>
              </ul>
            </div>

            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Certificates</h3>
              <ul className={`space-y-2 text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Python for Everybody — Coursera</li>
                <li>Google IT Support — Coursera</li>
              </ul>
            </div>

            <div className={`rounded-xl border p-6 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Communication', 'Teamwork', 'Critical Thinking', 'Time Management', 'Leadership', 'Adaptability'].map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700 border border-gray-200'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-3xl sm:text-4xl mb-8">
          <>{FaReact({ title: 'React' })}</>
          <>{SiTypescript({ title: 'TypeScript' })}</>
          <>{FaNodeJs({ title: 'Node.js' })}</>
          <>{SiSharp({ title: 'C#' })}</>
          <>{FaDatabase({ title: 'SQL Server' })}</>
          <>{SiRedux({ title: 'Redux' })}</>
          <>{SiRabbitmq({ title: 'RabbitMQ' })}</>
          <>{SiMongodb({ title: 'MongoDB' })}</>
          <>{SiMysql({ title: 'MySQL' })}</>
          <>{SiPhp({ title: 'PHP' })}</>
          <>{SiLaravel({ title: 'Laravel' })}</>
          <>{SiTailwindcss({ title: 'Tailwind CSS' })}</>
          <>{FaGithub({ title: 'GitHub' })}</>
          <>{FaPython({ title: 'Python' })}</>
          <>{FaAndroid({ title: 'Android Studio' })}</>
          <>{SiDotnet({ title: '.NET' })}</>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/AliSaker1999/my-portfolio/raw/main/public/AliSaker_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-600 transition-colors"
          >
            View My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
