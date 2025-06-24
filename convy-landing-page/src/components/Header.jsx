import React from 'react';

const Header = () => {
  return (
    <header
      className="shadow-sm"
      style={{ height: 70, backgroundColor: '#00B0C8' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img
              src="/images/Convy_app_logo 1.png"
              alt="Convy Logo"
              style={{
                width: 85,
                height: 33,
                objectFit: 'contain',
              }}
            />
          </div>
          <button
            className="bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-cyan-500 transition-colors flex items-center justify-center"
            style={{
              width: 168,
              height: 45,
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: 18,
              lineHeight: '100%',
              letterSpacing: '0%',
              borderRadius: 45,
            }}
          >
            Get The App
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;