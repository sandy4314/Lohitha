import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import './index.css';


const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme === 'dark' ? 'dark' : 'light';
  setTheme(initialTheme);
  
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);

const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);

  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />

      <div className="md:mt-52">
        <h1 id="about" className="text-center text-[35px] font-bold mt-20 mb-6">
          About Me
        </h1>
      </div>

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
    </div>
  );
};

export default App;
