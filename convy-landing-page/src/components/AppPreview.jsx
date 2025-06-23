import React from 'react';

const AppPreview = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="w-full h-32 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-3xl">🥗</span>
                </div>
                <h4 className="font-semibold text-gray-900">Fresh Salad</h4>
                <p className="text-sm text-gray-600">$8.99</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="w-full h-32 bg-yellow-100 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-3xl">🍕</span>
                </div>
                <h4 className="font-semibold text-gray-900">Pizza</h4>
                <p className="text-sm text-gray-600">$15.99</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bringing you the best <span className="text-cyan-500">meals</span> with
              <br />
              <span className="text-cyan-500">convenience</span> and care.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We deliver hot, fresh meals to your doorstep
              with amazing speed and amazing quality.
            </p>
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-colors">
              Try it Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
