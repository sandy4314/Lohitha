import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />

      {/* Responsive Side-by-Side About and Education */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
        <div className="w-full lg:w-1/2">
          <About />
        </div>
        <div className="w-full lg:w-1/2">
          <Education />
        </div>
      </div>

      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default App;
