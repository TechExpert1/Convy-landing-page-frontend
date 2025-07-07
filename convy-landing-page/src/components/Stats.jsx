import React from 'react';

const Stats = () => {
  return (
    <section className="bg-[#00B0C8] lg:h-[200px] sm:h-[74px] flex items-center mt-2 md:mt-10">
      <div className="w-full max-w-[1439px] h-full mx-auto px-2 sm:px-4 lg:px-8 flex flex-col justify-center">
        <div className="flex flex-row justify-center items-center gap-x-4 sm:gap-x-8 md:gap-x-8 lg:gap-x-[260px] text-center text-white font-['Poppins']">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[90px] sm:max-w-[44px] md:max-w-[159px] h-[40px] sm:h-[14px] md:h-[95px] font-semibold text-[22px] sm:text-[16px] md:text-[50px] leading-tight flex items-center justify-center mx-auto mb-2 sm:mb-[2px] md:mb-[-10px]">
              1.5k+
            </div>
            <div className="w-full max-w-[80px] sm:max-w-[100px] md:max-w-[123px] h-[20px] sm:h-[13px] md:h-[39px] font-normal text-[10px] sm:text-[10px] md:text-[22px] leading-tight flex items-center justify-center mx-auto text-white whitespace-nowrap">
              Downloads
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[90px] sm:max-w-[120px] md:max-w-[159px] h-[40px] sm:h-[14px] md:h-[95px] font-semibold text-[22px] sm:text-[16px] md:text-[50px] leading-tight flex items-center justify-center mx-auto mb-2 sm:mb-[2px] md:mb-[-10px]">
              1.5k+
            </div>
            <div className="w-full max-w-[80px] sm:max-w-[100px] md:max-w-[123px] h-[20px] sm:h-[13px] md:h-[39px] font-normal text-[10px] sm:text-[10px] md:text-[22px] leading-tight flex items-center justify-center mx-auto text-white whitespace-nowrap">
              Happy Customers
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[90px] sm:max-w-[120px] md:max-w-[159px] h-[40px] sm:h-[14px] md:h-[95px] font-semibold text-[22px] sm:text-[16px] md:text-[50px] leading-tight flex items-center justify-center mx-auto mb-2 sm:mb-[2px] md:mb-[-10px]">
              1.5k+
            </div>
            <div className="w-full max-w-[80px] sm:max-w-[100px] md:max-w-[123px] h-[20px] sm:h-[13px] md:h-[39px] font-normal text-[10px] sm:text-[10px] md:text-[22px] leading-tight flex items-center justify-center mx-auto text-white whitespace-nowrap">
              Monthly Orders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;