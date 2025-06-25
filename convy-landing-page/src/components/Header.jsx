import React from 'react';

const Header = () => {
  return (
    <header
      className="shadow-sm"
      style={{ height: 70, backgroundColor: '#00B0C8'}}
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
                position: 'absolute',
                top: 19,
                left: 100,
                objectFit: 'contain',
              }}
            />
          </div>
          <button
            style={{
              width: 168,
              height: 45,
              position: 'absolute',
              top: 13,
              left: 1172,
              borderRadius: 45,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#fff',
              boxShadow: '0px 1px 5px 0px #FFFFFF33',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                width: 116,
                height: 22,
                position: 'absolute',
                top: 11,
                left: 23,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: 18,
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Get The App
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;