interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className="py-20 px-6"
      data-aos="fade-up"
      style={{ backgroundColor: darkMode ? '#2D3748' : '#F7FAFC' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
        <p className={`text-lgc mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          I'm a passionate developer who loves creating web applications. With a background in full-stack development, I enjoy solving problems and building intuitive user interfaces.
        </p>
        <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          I specialize in React, Node.js, and Python. I'm always eager to learn new technologies and improve my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
