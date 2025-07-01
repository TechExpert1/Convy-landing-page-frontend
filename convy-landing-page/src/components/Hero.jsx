import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen grid grid-cols-2 relative min-h-[700px]">
      <div className="flex flex-col items-start justify-center relative pl-[220px]">
        {/* blue badge */}
        <div className="flex items-center gap-2 mb-6">
          {/* Rectangle background */}
          <div className="w-[198px] h-[50px] bg-[#00B0C81A] rounded-[69px]"></div>
          <span className="w-[143px] h-[20px] font-['Montserrat'] font-bold text-[16px] leading-none tracking-[0%] text-[#00B0C8] flex items-center justify-center -ml-[188px] z-10" >
            More than Faster 
          </span>
          <img src="/images/icons/mdi_run-fast.png" className="w-5 h-5 -ml-1 z-10" />
        </div>

        <h1 className="w-[787px] h-[192px] text-[64px] font-bold text-[#1E1E1E] font-['Poppins'] leading-snug text-left">
          Your Favorite Meals <br /> Delivered{" "}
          <span className="text-[#00B0C8]">Fresh!</span>
        </h1>

        <p className="w-[569px] h-[78px] text-[26px] font-normal font-['Poppins'] leading-snug text-[#797979] mt-8 text-left">
          Order from the best restaurants in town at<br />the tap of a button.
        </p>
        
        <button className="w-[295px] h-[80px] bg-[#00B0C8] text-white border-none rounded-[73px] cursor-pointer transition-colors duration-200 hover:bg-cyan-600 mt-8 relative">
          <span className="absolute top-5 left-[78px] w-[139px] h-[39px] font-['Poppins'] font-semibold text-[26px] leading-none flex items-center justify-center whitespace-nowrap">
            Order Now
          </span>
        </button>
      </div>

      {/*container for wizard and rect */}
      <div className="flex flex-col items-center justify-center relative">
        <div className="relative w-[298px] h-[557px]">
          {/* rect */}
          <div className="absolute top-[267px] left-0 w-[298px] h-[290px] rounded-[47px] bg-cyan-500 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] z-10"></div>

          {/*Wizard img */}
          <div className="absolute top-0 left-[26px] w-[242px] h-[525px] rounded-[23px] flex items-center justify-center">
            <img src="/images/Wizard.png"className="w-full h-full object-cover rounded-[23px] block relative z-20"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;