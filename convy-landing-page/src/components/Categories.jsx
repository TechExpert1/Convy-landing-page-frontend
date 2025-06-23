import React from 'react';

const Categories = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-cyan-500">Popular Categories</h2>
          <button className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
            →
          </button>
        </div>
        <p className="text-lg text-gray-600 mb-8">
          From your favorite restaurants to
          <br />
          your doorstep!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-cyan-500 rounded-2xl p-8 mb-4">
              <div className="w-24 h-24 bg-white rounded-xl mx-auto flex items-center justify-center">
                <span className="text-3xl">🥤</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Soft Drinks</h3>
            <p className="text-gray-600">Order now</p>
          </div>
          <div className="text-center">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-4">
              <div className="w-24 h-24 bg-red-100 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-3xl">🍕</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Chicken Pizza</h3>
            <p className="text-gray-600">Order now</p>
          </div>
          <div className="text-center">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-4">
              <div className="w-24 h-24 bg-yellow-100 rounded-xl mx-auto flex items-center justify-center">
                <span className="text-3xl">🧁</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Desserts</h3>
            <p className="text-gray-600">Order now</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-colors">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;