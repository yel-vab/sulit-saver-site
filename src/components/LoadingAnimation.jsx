import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="flex-grow md:ml-10 flex justify-center items-center space-x-10 sm:space-x-20 py-5">
      <div className="bg-platinum-900 w-8  h-8 sm:w-10 sm:h-10 animate-spin"></div>
      <div className="bg-platinum-900 w-16 h-16 sm:w-20 sm:h-20 animate-spin"></div>
      <div className="bg-platinum-900 w-8  h-8 sm:w-10 sm:h-10 animate-spin"></div>
    </div>
  );
};

export default LoadingAnimation;
