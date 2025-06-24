import React from 'react';

const Stats = () => {
  return (
    <section className="bg-cyan-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div>
            <div className="text-4xl font-bold mb-2">1.5k+</div>
            <div className="text-cyan-100">Downloads</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1.5k+</div>
            <div className="text-cyan-100">Happy customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1.5k+</div>
            <div className="text-cyan-100">Monthly orders</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
