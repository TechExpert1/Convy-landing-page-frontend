import React from 'react';
import { Truck, CreditCard, PiggyBank } from 'lucide-react';

const Features = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* single card around features */}
        <div
          style={{
            width: 1161,
            height: 145,
            position: 'absolute',
            top: 739,
            left: 140,
            borderRadius: 20,
            boxShadow: '0px 2px 7px 2px #0000001A',
            background: '#fff',
            padding: 32, // p-8 is 32px
            border: '1px solid #f3f4f6', // border-gray-100
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Fast Delivery */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-cyan-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hot and fresh, delivered right to your doorstep.
                </p>
              </div>
            </div>

            {/* Exclusive Deals */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <PiggyBank className="w-6 h-6 text-cyan-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Exclusive Deals
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enjoy savings with our daily offers and discounts
                </p>
              </div>
            </div>

            {/* Easy Payment */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-cyan-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easy Payment
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Multiple payment methods to make checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;