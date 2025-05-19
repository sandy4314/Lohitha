import React from 'react';

const SkillCard = (props) => {
  return (
    <div className="h-[180px] border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg p-6 max-w-2xl w-full bg-white dark:bg-[#1e1e1e]">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <span className="px-2 py-1 rounded-full bg-pink-600 text-white text-lg">
          <ion-icon name={props.name}></ion-icon>
        </span>
        <h1 className="text-xl font-semibold text-pink-600 dark:text-pink-400">{props.title}</h1>
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap gap-2">
        {props.skills.map((skill, i) => (
          <span
            key={i}
            className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium shadow-sm border border-gray-300 dark:border-gray-500 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
