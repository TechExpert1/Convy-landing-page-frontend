const Hero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative sm:py-9 px-2 xs:px-4 sm:px-4 md:px-16 lg:px-0">
      <div className="flex flex-col items-start justify-center relative lg:pl-[100px] sm:pl-0 py-6 sm:py-0 lg:py-0">
        {/*blue badge */}
        <div className="flex items-center gap-2 mb-3 xs:mb-6 relative">
          <div className="w-[140px] h-[32px] xs:w-[168px] xs:h-[39px] sm:w-[168px] sm:h-[39px] md:w-[198px] md:h-[50px] bg-[#00B0C81A] rounded-[69px]"></div>
          <span className="absolute left-2 xs:left-4 w-[100px] xs:w-[130px] sm:w-[130px] md:w-[143px] h-[20px] font-['Montserrat'] font-bold text-[9px] xs:text-[10px] sm:text-[12px] md:text-[16px] leading-none tracking-[0%] text-[#00B0C8] flex items-center justify-center z-10 whitespace-nowrap">
            More than Faster 
          </span>
          <img src="/images/icons/mdi_run-fast.png" className="absolute right-2 xs:right-4 w-3 h-3 xs:w-4 xs:h-4 sm:w-[18.5px] sm:h-[19.5px] z-10" />
        </div>

        <h1 className="font-['Poppins'] font-bold text-[28px] xs:text-[36px] sm:text-[36px] md:text-[48px] lg:text-[64px] text-[#1E1E1E] leading-tight text-left mb-3 xs:mb-6 max-w-full lg:max-w-[787px]">
          <span className="block">Your Favorite Meals Delivered <span className="text-[#00B0C8]"> Fresh!</span></span>          
        </h1>

        <p className="font-['Poppins'] font-normal text-[12px] xs:text-[16px] sm:text-[16px] md:text-[24px] lg:text-[26px] leading-relaxed text-[#797979] mb-5 xs:mb-8 text-left max-w-full lg:max-w-[569px]">
          Order from the best restaurants in town at <br className="hidden xs:block" />
          the tap of a button.
        </p>
        
        <button className="w-[calc(100vw-26px)] xs:w-[240px] sm:w-full md:w-[295px] h-[42px] xs:h-[60px] sm:h-[45px] md:h-[80px] bg-[#00B0C8] text-white border-none rounded-[73px] cursor-pointer transition-colors duration-200 hover:bg-cyan-600 flex items-center justify-center">
          <span className="font-['Poppins'] font-semibold text-[14px] xs:text-[18px] sm:text-[13px] md:text-[26px] whitespace-nowrap">
            Order Now
          </span>
        </button>
      </div>

      {/*img container */}
      <div className="flex flex-col items-center justify-center relative mt-4 xs:mt-8 lg:mt-0 lg:pl-[80px]">
        <div className="relative w-[150px] xs:w-[200px] sm:w-[240px] md:w-[298px] h-[280px] xs:h-[380px] sm:h-[450px] md:h-[557px]">
          {/* bg rectangle */}
          <div className="absolute bottom-[16px] xs:bottom-[24px] left-0 w-full h-[50%] rounded-[32px] xs:rounded-[45px] sm:rounded-[40px] md:rounded-[47px] bg-[#00AFCA] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] z-10"></div>
          {/* wizard image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[90%] rounded-[15px] xs:rounded-[20px] sm:rounded-[23px] flex items-center justify-center z-20">
            <img src="/images/Wizard.png" className="w-full h-full object-cover rounded-[15px] xs:rounded-[20px] sm:rounded-[23px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;