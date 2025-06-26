import React from 'react';

const Features = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* the outside card */}
        <div className="flex items-center w-full max-w-[1161px] min-h-[145px] ml-[-40px] -mt-[56px] rounded-[20px] bg-white shadow-[0px_2px_7px_2px_#0000001A] border border-gray-100 px-[34px] py-[34px]">
          <div className="h-[76px] grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* fastDelivery */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 py-[10px] ">
                <div className="w-[56px] h-[56px] bg-cyan-100 rounded-full flex items-center justify-center">
                  <img src="/images/icons/FastDelivery.png" className="w-[31.41px] h-[24.83px]" />
                </div>
              </div>
              <div className="flex-1 text-[#333333] font-['poppins'] w-[274px] h-[76px]">
                <h3 className="text-[18px] font-semibold w-[117px] h-[27px] mb-2">
                  Fast Delivery
                </h3>
                <p className="text-[15px] w-[274px] h-[46px] font-normal leading-snug">
                  Hot and fresh, delivered right to your doorstep.
                </p>
              </div>
            </div>

            {/*Exclusive Deals */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 py-[10px] ">
                <div className="w-[56px] h-[56px] bg-cyan-100 rounded-full flex items-center justify-center">
                  <img src="/images/icons/ExclusiveDeals.png"className="w-[31.41px] h-[24.83px]"/>
                </div>
              </div>
              <div className="flex-1 text-[#333333] font-['poppins'] w-[274px] h-[76px]">
                <h3 className="text-[18px] font-semibold w-[117px] h-[27px] mb-2 whitespace-nowrap">
                  Exclusive Deals
                </h3>
                <p className="text-[15px] w-[274px] h-[46px] font-normal leading-snug">
                  Enjoy savings with our daily offers and discounts
                </p>
              </div>
            </div>

            {/*Easy Payment */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 py-[10px]">
                <div className="w-[56px] h-[56px] bg-cyan-100 rounded-full flex items-center justify-center">
                  <img src="/images/icons/EasyPayment.png" className="w-[31.41px] h-[24.83px]"/>
                </div>
              </div>
              <div className="flex-1 text-[#333333] font-['poppins'] w-[274px] h-[76px]">
                <h3 className="text-[18px] font-semibold w-[117px] h-[27px] mb-2 whitespace-nowrap">
                  Easy Payment
                </h3>
                <p className="text-[15px] w-[274px] h-[46px] font-normal leading-snug ">
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