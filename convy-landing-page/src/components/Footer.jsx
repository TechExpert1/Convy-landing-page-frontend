import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-500 text-white">
      {/* Newsletter Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Get the latest information and</h3>
              <p className="text-cyan-100">promo offers directly</p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Input your email here"
                  className="flex-1 px-4 py-3 rounded-l-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-cyan-500 px-6 py-3 rounded-r-full hover:bg-gray-100 transition-colors font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-cyan-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold">convy</span>
              </div>
              <p className="text-cyan-100 mb-4">
                Delicious meals are just a tap away - download now and order on the go!
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-lg">f</span>
                </div>
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-lg">t</span>
                </div>
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-lg">in</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-cyan-100">
                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
              </ul>
            </div>

            {/* Policy Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Policy</h4>
              <ul className="space-y-2 text-cyan-100">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-cyan-100">
                <li>+62 896 7311 2766</li>
                <li>food@begundal.com</li>
                <li>Jl. Kpg Sutoyo</li>
                <li>Kec. Kby. Baru, Jakarta</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-cyan-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1.5k+</div>
              <div className="text-cyan-100">Daily orders</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1.5k+</div>
              <div className="text-cyan-100">Happy customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1.5k+</div>
              <div className="text-cyan-100">Delivered orders</div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-cyan-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-cyan-100">
            © 2024 Convy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;