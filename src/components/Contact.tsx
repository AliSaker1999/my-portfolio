interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className="py-20"
      data-aos="fade-up"
      style={{ backgroundColor: darkMode ? '#2D3748' : '#F7FAFC' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Feel free to reach out for collaboration or any inquiries.</p>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email: AliSaker19999@hotmail.com</p>
      </div>
      
    </section>
  );
};

export default Contact;
