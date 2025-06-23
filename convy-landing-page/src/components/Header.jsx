import React from 'react';

const Header = () => {
  return (
    <header className="bg-cyan-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">convy</span>
          </div>
          <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-cyan-500 transition-colors">
            Get The App
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;