import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Favorite Meals
              <br />
              <span className="text-cyan-500">Delivered Fresh!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Order from the best restaurants in town at
              <br />
              the tap of a button.
            </p>
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-colors">
              Order Now
            </button>
          </div>
          <div className="relative flex justify-center">
            {/* Phone Mockup */}
            <div className="w-56 rounded-[2.5rem] bg-cyan-500 shadow-2xl pb-6 pt-2 px-2 flex flex-col items-center">
              {/* Top bar */}
              <div className="w-full flex justify-between items-center px-4 py-1">
                <div className="w-8 h-2"></div>
                <div className="w-8 h-2 flex justify-end space-x-1">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
              </div>
              {/* Logo */}
              <div className="flex flex-col items-center mt-2 mb-4">
                <span className="text-3xl font-bold text-white italic tracking-wide">
                  conv
                  <span className="text-yellow-400 not-italic">y</span>
                </span>
                <div className="flex justify-center space-x-2 mt-1">
                  <span className="w-4 h-2 bg-white rounded-b-full inline-block"></span>
                  <span className="w-4 h-2 bg-white rounded-b-full inline-block"></span>
                </div>
              </div>
              {/* White card */}
              <div className="bg-white rounded-2xl shadow-lg px-4 py-6 w-full -mb-8 z-10">
                <div className="text-center">
                  <p className="text-gray-500 text-sm">Convenience at</p>
                  <p className="font-bold text-gray-700 text-lg mb-2">YOUR DOOR</p>
                  <p className="text-gray-400 text-xs mb-4">
                    Easily shop all the essentials,<br />
                    delivered straight to your door.
                  </p>
                  <button className="bg-cyan-500 text-white px-4 py-2 rounded-full text-xs font-semibold w-full mb-2">
                    SHOP CATEGORIES
                  </button>
                  <p className="text-[10px] text-gray-400 underline cursor-pointer">REGISTER AS A RIDER</p>
                </div>
              </div>
            </div>
            {/* End Phone Mockup */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;