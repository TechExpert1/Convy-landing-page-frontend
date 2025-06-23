import React from 'react';

const HowWeServeYou = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Serve You</h2>
          <p className="text-xl text-gray-600">Serving happiness, one meal at a time!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-cyan-500 rounded-2xl p-8 mb-6 mx-auto w-fit">
              <div className="w-16 h-16 bg-white rounded-xl mx-auto flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Careful Packaging</h3>
          </div>
          
          <div className="text-center">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6 mx-auto w-fit">
              <div className="w-16 h-16 bg-red-50 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Packed with Love</h3>
          </div>
          
          <div className="text-center">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6 mx-auto w-fit">
              <div className="w-16 h-16 bg-yellow-50 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-2xl">🍟</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Serve Hot Appetite</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-cyan-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-500">convy</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center py-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Convenience at your door</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    So you don't have to leave the house
                    to enjoy delicious food
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download the app</h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Get the App. Savor the Convenience
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Delicious meals are just a tap away - download now and order on the go!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-2xl mr-3">🍎</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-2xl mr-3">📱</span>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Play Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeServeYou;