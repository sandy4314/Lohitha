import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import project1 from '/src/assets/lohi.png';
import project2 from '/src/assets/lohi.png';
import project4 from '/src/assets/lohi.png';
import project5 from '/src/assets/lohi.png';
import project6 from '/src/assets/lohi.png';
import project7 from '/src/assets/repair1.jpeg';

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const allProjects = [
    {
      id: 1,
      type: "Web",
      title: "City Fix",
      image: project7,
      description: "A responsive complaint management system where users can report issues in their city...",
      link1: "https://github.com/sandy4314/Cityfix/",
      link2: "https://github.com/sandy4314/Cityfix/"
    },
    {
      id: 2,
      type: "Web",
      title: "Task Management Dashboard",
      image: project5,
      description: "A responsive task manager where admins assign and track tasks...",
      link1: "https://github.com/sandy4314/Tasktrack/",
      link2: "https://sandy4314.github.io/Tasktrack/"
    },
    {
      id: 3,
      type: "Web",
      title: "Snake Game",
      image: project2,
      description: "A classic Snake Game built with HTML, CSS, and JavaScript...",
      link1: "https://github.com/sandy4314/snakegame/",
      link2: "https://sandy4314.github.io/snakegame/"
    },
    {
      id: 4,
      type: "ML",
      title: "Multi Disease Web App",
      image: project6,
      description: "A machine learning-powered web app that predicts multiple diseases...",
      link1: "https://github.com/sandy4314/Multi-DIsease-Ml-Web-App",
      link2: "https://github.com/sandy4314/Multi-DIsease-Ml-Web-App"
    },
    {
      id: 5,
      type: "Web",
      title: "GuestHouse",
      image: project1,
      description: "A responsive website for seamless room booking...",
      link1: "https://github.com/sandy4314/GuestHouse",
      link2: "https://sandy4314.github.io/GuestHouse/"
    },
    {
      id: 6,
      type: "Web",
      title: "WeatherNow",
      image: project4,
      description: "A real-time weather web app showing temperature, humidity, etc.",
      link1: "https://github.com/sandy4314/weather",
      link2: "https://sandy4314.github.io/weather/"
    }
  ];

  const filterOptions = ["All", "Web", "ML"];
  const [selectedType, setSelectedType] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    selectedType === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === selectedType);

  const visibleProjects = filteredProjects.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < filteredProjects.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="p-8 bg-gray-50 ">
      <h2 className="text-3xl font-bold text-center mb-2">My Projects</h2>
      <p className="text-center text-gray-600 mb-6">
        Explore my portfolio of projects spanning different technologies and domains.
      </p>

      <div className="flex justify-center gap-4 mb-6">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => {
              setSelectedType(option);
              setCurrentIndex(0);
            }}
            className={`px-10 py-2 rounded-full text-sm ${
              selectedType === option ? 'bg-pink-600 text-white' : 'bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          <FaArrowLeft className="text-xl text-gray-600 hover:text-pink-600" />
        </button>

        <div className="flex gap-6 overflow-hidden transition-all duration-300">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md w-80 flex-shrink-0"
              data-aos="fade-up"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-xl w-full h-44 object-cover"
                />
                <span className="absolute top-2 right-2 bg-pink-600 text-white px-2 py-1 text-xs rounded">
                  {project.type}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="flex gap-2">
                  <button className='bg-pink-600 w-28 h-10 rounded-xl m-4 text-white font-semibold hover:bg-pink-300'><a href={project.link1}>Repo link</a></button>
                  <button className='bg-pink-600 w-28 h-10 rounded-xl m-4 text-white font-semibold hover:bg-pink-300'><a href={project.link2}>Live</a></button>
                   
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex + 3 >= filteredProjects.length}
        >
          <FaArrowRight className="text-xl text-gray-600 hover:text-pink-600" />
        </button>
      </div>
    </div>
  );
};

export default Project;
