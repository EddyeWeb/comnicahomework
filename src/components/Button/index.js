import React from 'react';

const Button = () => {
  const handleClick = () => {
    console.log('Kezdhetjük');
  };

  return (
    <button
      onClick={handleClick}
      className="py-4 px-8 text-white rounded-full text-xl font-bold hover:bg-opacity-90 transition duration-300"
    >
      Kezdhetjük
    </button>
  );
};

export default Button;
