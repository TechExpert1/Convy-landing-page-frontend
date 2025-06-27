import React from 'react';

const Stats = () => {
  return (
    <section className="bg-[#00B0C8] py-[48px]">
      <div className="max-w-[1439px] max-h-[230px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] text-center text-white">
          <div className="font-['Poppins']">
            <div className="w-[159px] h-[95px] font-semibold text-[50px] leading-[94.88px] tracking-[0%] text-center flex items-center justify-center mx-auto -mb-[10px]">
              1.5k+
            </div>
            <div className="w-[123px] h-[39px] font-normal text-[22px] leading-[38.4px] tracking-[0%] text-center flex items-center justify-center mx-auto text-white whitespace-nowrap">
              Downloads
            </div>
          </div>
          <div>
            <div className="w-[159px] h-[95px] font-semibold text-[50px] leading-[94.88px] tracking-[0%] text-center flex items-center justify-center mx-auto -mb-[10px]">
              1.5k+
            </div>
            <div className="w-[123px] h-[39px] font-normal text-[22px] leading-[38.4px] tracking-[0%] text-center flex items-center justify-center mx-auto text-white whitespace-nowrap">
              Happy customers
            </div>
          </div>
          <div>
            <div className="w-[159px] h-[95px] font-semibold text-[50px] leading-[94.88px] tracking-[0%] text-center flex items-center justify-center mx-auto -mb-[10px]">
              1.5k+
            </div>
            <div className="w-[123px] h-[39px] font-normal text-[22px] leading-[38.4px] tracking-[0%] text-center flex items-center justify-center mx-auto text-white whitespace-nowrap">
              Monthly orders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
