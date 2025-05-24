import { useState } from 'react';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to <span className="text-blue-600">Handy Connect</span>
      </h1>
      <p className="text-gray-600 max-w-xl text-lg">
        Quickly connect with verified home service providers like plumbers, electricians, painters, and more.
      </p>
    </div>
  );
};

export default Homepage;
