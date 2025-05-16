import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className="cursor-pointer bg-pink-600  text-white font-[Poppins] py-3 px-6 rounded-full   hover:bg-pink-400 duration-500"
    >
      {children}
    </button>
  );
};

export default Button;
