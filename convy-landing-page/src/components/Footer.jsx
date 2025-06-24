import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Logo and Description */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex flex-col items-start mt-2 mb-4 ml-4">
              <span className="text-5xl font-bold text-white italic tracking-wide">
                conv
                <span className="text-yellow-400 not-italic">y</span>
              </span>
              <div className="flex items-center mt-[-20px] ml-0">
                <span className="w-[130px] h-1.5 bg-yellow-400 rounded-full ml-18"></span>
                <span className="block w-5 h-3 bg-white rounded-b-full ml-[-92px] mt-6"></span>
                <span className="block w-5 h-3 bg-white rounded-b-full ml-8 mt-6"></span>
              </div>
            </div>
            <p className="text-cyan-100 text-lg leading-relaxed max-w-sm">
              Stay connected with us for great meals, updates, and opportunities – 
              your satisfaction is our priority every step of the way!
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                <span className="text-xl font-semibold">f</span>
              </div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" fill="none"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" fill="none"/>
                  <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                <span className="text-xl font-semibold">X</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Get the latest information and</h3>
              <p className="text-2xl font-bold">subscribe to our newsletter</p>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-6 py-4 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-white pr-16"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-cyan-500 text-white px-4 rounded-full hover:bg-cyan-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact</h3>
            <div className="space-y-3 text-cyan-100 text-lg">
              <p>+123 456 7890</p>
              <p>info@convy.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;