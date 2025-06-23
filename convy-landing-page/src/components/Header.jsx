import React from 'react';

const Header = () => {
  return (
    <header className="bg-cyan-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold italic text-white leading-none">
                conv
                <span className="text-yellow-400 italic">y</span>
              </span>
              <div className="flex items-center mt-[-11px] ml-0.5">
                <span className="block w-14 h-1 bg-yellow-400 rounded-full"></span>
                <span className="block w-3.5 h-1.5 bg-white rounded-b-full ml-[-45px] mt-4"></span>
                <span className="block w-3.5 h-1.5 bg-white rounded-b-full ml-2 mt-4"></span>
              </div>
            </div>
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