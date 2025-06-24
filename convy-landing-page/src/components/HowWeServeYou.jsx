import React from 'react';

const serveBoxes = [
  {
    image: "/images/CarefulPackaging.png",
    title: "Careful Packaging",
    baseBg: "bg-white border-2 border-gray-200",
    emojiBg: "bg-white",
  },
  {
    image: "/images/PackedWithLove.png",
    title: "Packed with Love",
    baseBg: "bg-white border-2 border-gray-200",
    emojiBg: "bg-red-50",
  },
  {
    image: "/images/Appetite.png",
    title: "Serve Hot Appetite",
    baseBg: "bg-white border-2 border-gray-200",
    emojiBg: "bg-yellow-50",
  },
];

const HowWeServeYou = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-500 mb-4">How We Serve You</h2>
          <p className="font-bold text-4xl md:text-5xl text-gray-800 mb-2" style={{ fontSize: '2.5rem' }}>
            Serving happiness, one meal at a time!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {serveBoxes.map((box) => (
            <div
              key={box.title}
              className="flex justify-center"
            >
              <div
                className={`w-80 h-72 flex flex-col items-center justify-center rounded-2xl p-8 mb-6 ${box.baseBg} transition-colors duration-200 group hover:bg-cyan-500 hover:border-cyan-500`}
              >
                <div className="w-full flex items-center justify-center mb-4">
                  <img
                    src={box.image}
                    alt={box.title}
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-200 group-hover:text-white">
                  {box.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cyan-100 rounded-3xl p-12 pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative -mt-12">
              <div className="bg-black rounded-[2.2rem] p-[3px] max-w-sm mx-auto shadow-2xl" style={{width: '280px', height: '580px'}}>
                <div className="bg-cyan-500 rounded-[2rem] h-full flex flex-col overflow-hidden">
                  {/* Status bar area */}
                  <div className="h-8 flex justify-between items-center px-4" style={{ marginTop: '2px' }}>
                    <span className="text-black text-xs font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-black"></div>
                      <div className="w-1.5 h-1.5 bg-black"></div>
                    </div>
                  </div>
                  
                  {/* Logo section */}
                  <div className="flex flex-col items-center justify-center w-full" style={{ height: 120 }}>
                    <div className="flex flex-col items-center mt-2 mb-4">
                      <span className="text-4xl font-bold text-white italic tracking-wide">
                        conv
                        <span className="text-yellow-400 not-italic">y</span>
                      </span>
                      <div className="flex items-center mt-[-15px] ml-[-30px]">
                        <span className="w-[90px] h-1 bg-yellow-400 rounded-full"></span>
                        <span className="block w-3.5 h-2 bg-white rounded-b-full ml-[-60px] mt-4"></span>
                        <span className="block w-3.5 h-2 bg-white rounded-b-full ml-4 mt-4"></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* White content section */}
                  <div className="bg-white rounded-t-3xl flex-1 px-8 pt-8">
                    <h2 className="text-gray-800 text-xl font-bold text-center mb-1">Convenience at</h2>
                    <h2 className="text-gray-800 text-xl font-bold text-center mb-6">YOUR DOOR</h2>
                    
                    <p className="text-gray-500 text-sm text-center mb-8 leading-relaxed">
                      Easily shop all the essentials,<br />
                      delivered straight to your door.
                    </p>
                    
                    <button className="w-full bg-cyan-500 text-white py-4 rounded-lg font-bold text-sm mb-6 tracking-wider transition-colors duration-200 hover:bg-cyan-700">
                      SHOP CATEGORIES
                    </button>
                    
                    <div className="text-center mb-8">
                      <button
                        className="text-black-600 font-semibold text-sm underline hover:text-gray-700 transition-colors"
                        onClick={() => {
                          // TODO: Add your registration logic or navigation here
                          alert('Register as a rider clicked!');
                        }}
                      >
                        Register as a rider
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-cyan-500 text-xl font-semibold mb-4">Download the app</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Get the App, Savor the<br />
                Convenience
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Delicious meals are just a tap away - download<br />
                now and order on the go!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center bg-black text-white px-6 py-4 rounded-xl transition-colors duration-200 hover:bg-gray-200 hover:text-black">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.86 11.38 7.75 12.1 7.75C12.81 7.75 14.28 6.65 15.82 6.83C16.47 6.86 18.27 7.13 19.29 8.87C19.2 8.93 17.25 10.19 17.27 12.8C17.3 15.89 19.85 16.91 19.88 16.92C19.86 17 19.45 18.27 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get App</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>

                <button className="flex items-center bg-black text-white px-6 py-4 rounded-xl transition-colors duration-200 hover:bg-gray-200 hover:text-black">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get App</div>
                    <div className="text-lg font-semibold">Play Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeServeYou;