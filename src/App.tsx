import React from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </header>
      <main className="p-8">
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;
