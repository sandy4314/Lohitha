import React from 'react';

const educationData = [
  {
    year: "2022-2026",
    title: "B.Tech [AIML]",
    subtitle: "QIS College of Engineering and Technology",
  },
  {
    year: "2020-2022",
    title: "Intermediate [MPC]",
    subtitle: "Sri Saraswathi Jr College",
  },
  {
    year: "2020",
    title: "SSC",
    subtitle: "Nirmala High School",
  },
];

export default function Education() {
  return (
    <div className="lg:py-1">
      <h2 className="text-[40px] font-bold text-pink-600 dark:text-pink-400 mb-8">Education</h2>
      <div className="relative border-l-4 border-pink-300 dark:border-pink-500 pl-6">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-10 relative">
            <div className="absolute -left-9 top-5 w-6 h-6 bg-pink-600 dark:bg-pink-400 rounded-full border-4 border-white shadow-md"></div>
            <div className="p-5 rounded-xl shadow-md dark:shadow-pink-900">
              <p className="text-pink-600 dark:text-pink-400 font-semibold">{edu.year}</p>
              <h3 className="text-lg font-bold dark:text-white">{edu.title}</h3>
              <p className="text-gray-500 dark:text-gray-300">{edu.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
