import React from 'react';

const Features = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-cyan-500">🚚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Promise to deliver within 30 minutes
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-cyan-500">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive Deals</h3>
            <p className="text-gray-600">
              Get the most exclusive deals only available in our app
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-cyan-500">💳</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Payment</h3>
            <p className="text-gray-600">
              You can pay cash on delivery and via card
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;