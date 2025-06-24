import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="text-5xl font-bold text-gray-900 mb-6"
              style={{
                width: 787,
                height: 192,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 64
              }}
            >
              Your Favorite Meals
              <br />
              <span style={{ color: '#1E1E1E' }}>Delivered </span>
              <span style={{ color: '#00B0C8' }}>Fresh!</span>
            </h1>
            <p
              className="mb-8"
              style={{
                width: 569,
                height: 78,
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
              className="bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
              style={{
                width: 295,
                height: 80,
                fontFamily: 'Poppins, sans-serif',
                position: 'relative',
              }}
            >
              <span
                style={{
                  width: 139,
                  height: 39,
                  position: 'absolute',
                  top: 21,
                  left: 78,
                  fontFamily: 'Poppins, sans-serif',
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
          </div>
          <div className="relative flex justify-center">
            {/* Wizard Image */}
            <div
              style={{
                width: 242.22,
                height: 525,
                borderRadius: 22.53,
                overflow: 'hidden',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/images/Wizard.png"
                alt="Wizard"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 22.53,
                  display: 'block',
                }}
              />
            </div>
            <div
              style={{
                width: 298,
                height: 290,
                position: 'absolute',
                top: 393,
                left: 1006,
                borderRadius: 47,
                background: '#00AFCA',
                zIndex: 10,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;