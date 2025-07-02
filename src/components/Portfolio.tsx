interface PortfolioProps {
  darkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  return (
    <section
      id="portfolio"
      className="py-20"
      data-aos="fade-up"
      style={{ backgroundColor: darkMode ? '#2D3748' : '#F7FAFC' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Project 1</h3>
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description of the project goes here.</p>
            <a href="#" className="text-blue-500 hover:underline">View Details</a>
          </div>

          {/* Project 2 */}
          <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Project 2</h3>
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description of the project goes here.</p>
            <a href="#" className="text-blue-500 hover:underline">View Details</a>
          </div>

          {/* Project 3 */}
          <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Project 3</h3>
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Description of the project goes here.</p>
            <a href="#" className="text-blue-500 hover:underline">View Details</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
