import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaDatabase, FaPython, FaAndroid } from 'react-icons/fa';
import { SiTypescript, SiSharp, SiTailwindcss, SiSpringboot,  SiDotnet } from 'react-icons/si';


interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
       <p className="text-lg leading-relaxed mb-8">
        I'm <span className="font-semibold text-blue-500">Ali Saker</span>, a full-stack developer with a strong background in ASP.NET, C#, Java, Python, React, TypeScript, and SQL Server. I’m passionate about building dynamic web applications, implementing proven design patterns, and developing mobile apps using Android Studio. I always focus on clean code, responsive design, and high performance.
      </p>


        <h3 className="text-2xl font-semibold mb-4">Technologies I Use</h3>
        <div className="flex flex-wrap justify-center gap-6 text-4xl">
          <>{FaReact({ title: "React" })}</>
          <>{SiTypescript({ title: "TypeScript" })}</>
          <>{FaNodeJs({ title: "Node.js" })}</>
          <>{SiSharp({ title: "C#" })}</>
          <>{FaDatabase({ title: "SQL Server" })}</>
          <>{SiTailwindcss({ title: "Tailwind CSS" })}</>
          <>{FaGithub({ title: "GitHub" })}</>
          <>{SiSpringboot({ title: "Spring Boot" })}</>
          <>{FaPython({ title: "Python" })}</>
          <>{FaAndroid({ title: "Android Studio" })}</>
          <>{SiDotnet({ title: ".NET" })}</>
        </div>



        {/* Optional: Add CV Button */}
        <div className="mt-8">
          <a
            href="/AliSaker_CV.pdf"
            download
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-600 transition"
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
