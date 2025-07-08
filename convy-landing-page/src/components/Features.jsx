const Features = () => {
  return (
    <div className="bg-white py-6 sm:py-8 md:py-12 px-4 sm:px-4 md:px-16">
      <div className="max-w-[1161px] mx-auto lg:flex lg:justify-center lg:pl-9 sm:pl-0">
        {/*cards container */}
        <div className="flex items-center w-[335px] sm:w-full md:w-[1000px] bg-white shadow-[0px_2px_7px_2px_#0000001A] border border-gray-100 rounded-[15px] sm:rounded-[20px] px-4 sm:px-3 md:px-[34px] py-4 sm:py-6 md:py-[34px] -mt-8 sm:-mt-12 md:-mt-[26px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 md:gap-6 lg:gap-8 w-full">
            
            {/* Fast Delivery */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 py-2 sm:py-[10px]">
                <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] bg-[#00B0C81A] rounded-full flex items-center justify-center">
                  <img src="/images/icons/FastDelivery.png" className="w-[20px] h-[16px] sm:w-[25px] sm:h-[20px] md:w-[31.41px] md:h-[24.83px]" />
                </div>
              </div>
              <div className="flex-1 text-[#333333] font-['Poppins']">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold mb-1 sm:mb-2">
                  Fast Delivery
                </h3>
                <p className="text-[12px] sm:text-[13px] md:text-[15px] font-normal leading-snug">
                  Hot and fresh, delivered right to your doorstep.
                </p>
              </div>
            </div>

            {/* Exclusive Deals */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 py-2 sm:py-[10px]">
                <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] bg-[#00B0C81A] rounded-full flex items-center justify-center">
                  <img src="/images/icons/ExclusiveDeals.png" className="w-[20px] h-[16px] sm:w-[25px] sm:h-[20px] md:w-[31.41px] md:h-[24.83px]" />
                </div>
              </div>
              <div className="flex-1 text-[#333333] font-['Poppins']">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold mb-1 sm:mb-2 whitespace-nowrap">
                  Exclusive Deals
                </h3>
                <p className="text-[12px] sm:text-[13px] md:text-[15px] font-normal leading-snug">
                  Enjoy savings with our daily offers and discounts
                </p>
              </div>
            </div>

            {/* Easy Payment */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 py-2 sm:py-[10px]">
                <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] bg-[#00B0C81A] rounded-full flex items-center justify-center">
                  <img src="/images/icons/EasyPayment.png" className="w-[20px] h-[16px] sm:w-[25px] sm:h-[20px] md:w-[31.41px] md:h-[24.83px]" />
                </div>
              </div>
              <div className="flex-1 text-[#333333] font-['Poppins']">
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold mb-1 sm:mb-2 whitespace-nowrap">
                  Easy Payment
                </h3>
                <p className="text-[12px] sm:text-[13px] md:text-[15px] font-normal leading-snug">
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