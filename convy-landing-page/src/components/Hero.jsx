import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 relative" style={{ minHeight: '700px' }}>
      <div>
      <h1
      
        className="text-5xl font-bold text-gray-900 mb-6"
        style={{
          width: 787,
          height: 192,
          position: 'absolute', 
          top: 161, //(relative to the header section)
          left: 100,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: 64,
        }}
      >
        Your Favorite Meals
        
      </h1>
      <div>
        <span style={{ color: '#1E1E1E' }}>Delivered </span>
        <span style={{ color: '#00B0C8' }}>Fresh!</span>
      </div>
      </div>
      <p
        className="mb-8"
        style={{
          width: 569,
          height: 78,
          position: 'absolute',
          top: 444,
          left: 100,
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: 26,
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#797979',
        }}
      >
        Order from the best restaurants in town at
        <br />
        the tap of a button.
      </p>
      <button
        style={{
          width: 295,
          height: 80,
          top: 569,
          left: 100,
          borderRadius: 73,
          position: 'absolute',
          background: '#00B0C8',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#0090A8')}
        onMouseOut={e => (e.currentTarget.style.background = '#00B0C8')}
      >
        <span
          style={{
            width: 139,
            height: 39,
            position: 'absolute',
            top: 21,
            left: 78,
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: 26,
            lineHeight: '100%',
            letterSpacing: '0%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          Order Now
        </span>
      </button>

      {/* rarent cntnr for wiz nd rectang */}
      <div
        style={{
          width: 298,
          height: 557,
          position: 'absolute',
          top: 56, // 126 - 70 = 56 (relative to idk who)
          left: 1006,
        }}
      >
        {/* Rectang */}
        <div
          style={{
            width: 298,
            height: 290,
            position: 'absolute',
            top: 267, // 393 - 126 = 267 (relative to parent)
            left: 0, // 1006 - 1006 = 0 (relative to parent)
            borderRadius: 47,
            background: '#00AFCA',
            boxShadow: '0px 4px 10px 0px #00000040',
            zIndex: 1,
          }}
        ></div>

        {/* Wizard img */}
        <div
          style={{
            position: 'absolute',
            width: 242.2210235595703,
            height: 525,
            borderRadius: 22.53,
            top: 0, // 126 - 126 = 0 (relative to parent)
            left: 26, // 1032 - 1006 = 26 (relative to parent)
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Wizard img */}
          <img
            src="/images/Wizard.png"
            alt="Wizard"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 22.53,
              display: 'block',
              position: 'relative',
              zIndex: 2,
            }}
          />
        </div>
      </div>

      {/* Keep the original grid structure but make it invisible - just for layout flow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Favorite Meals Delivered Fresh!
            </h1>
            <p className="mb-8">
              Order from the best restaurants in town at the tap of a button.
            </p>
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-full">
              Order Now
            </button>
          </div>
          <div className="relative flex justify-center">
            <div style={{ width: 298, height: 557 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;