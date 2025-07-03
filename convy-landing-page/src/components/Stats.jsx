import React from 'react';

const Stats = () => {
  return (
    <section className="bg-[#00B0C8] min-h-[230px] flex items-center">
      <div className="w-full max-w-[1439px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 gap-x-8 md:gap-x-[188px] text-center text-white font-['Poppins']">
          <div className=" flex flex-col items-center">
            <div className="w-full max-w-[159px] h-[70px] md:h-[95px] font-semibold text-[36px] sm:text-[44px] md:text-[50px] leading-tight flex items-center justify-center mx-auto -mb-2 md:-mb-[10px]">
              1.5k+
            </div>
            <div className="w-full max-w-[123px] h-[32px] md:h-[39px] font-normal text-[16px] sm:text-[18px] md:text-[22px] leading-tight flex items-center justify-center mx-auto text-white whitespace-nowrap">
              Downloads
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[159px] h-[70px] md:h-[95px] font-semibold text-[36px] sm:text-[44px] md:text-[50px] leading-tight flex items-center justify-center mx-auto -mb-2 md:-mb-[10px]">
              1.5k+
            </div>
            <div className="w-full max-w-[123px] h-[32px] md:h-[39px] font-normal text-[16px] sm:text-[18px] md:text-[22px] leading-tight flex items-center justify-center mx-auto text-white whitespace-nowrap">
              Happy customers
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[159px] h-[70px] md:h-[95px] font-semibold text-[36px] sm:text-[44px] md:text-[50px] leading-tight flex items-center justify-center mx-auto -mb-2 md:-mb-[10px]">
              1.5k+
            </div>
            <div className="w-full max-w-[123px] h-[32px] md:h-[39px] font-normal text-[16px] sm:text-[18px] md:text-[22px] leading-tight flex items-center justify-center mx-auto text-white whitespace-nowrap">
              Monthly orders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
