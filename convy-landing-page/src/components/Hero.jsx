const Hero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative px-4 sm:px-8 md:px-16 lg:px-0">
      <div className="flex flex-col items-start justify-center relative lg:pl-[160px] py-8 lg:py-0">
        {/* blue badge */}
        <div className="flex items-center gap-2 mb-6 relative">
          <div className="w-[160px] sm:w-[180px] md:w-[198px] h-[40px] sm:h-[45px] md:h-[50px] bg-[#00B0C81A] rounded-[69px]"></div>
          <span className="absolute left-4 w-[120px] sm:w-[130px] md:w-[143px] h-[20px] font-['Montserrat'] font-bold text-[12px] sm:text-[14px] md:text-[16px] leading-none tracking-[0%] text-[#00B0C8] flex items-center justify-center z-10">
            More than Faster 
          </span>
          <img src="/images/icons/mdi_run-fast.png" className="absolute right-4 w-4 h-4 sm:w-5 sm:h-5 z-10" />
        </div>

        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold whitespace-nowrap text-[#1E1E1E] font-['Poppins'] leading-tight text-left mb-6 max-w-full lg:max-w-[787px]">
          Your Favorite Meals <br className="hidden sm:block" /> 
          Delivered <span className="text-[#00B0C8]">Fresh!</span>
        </h1>

        <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-normal font-['Poppins'] leading-relaxed text-[#797979] mb-8 text-left max-w-full lg:max-w-[569px]">
          Order from the best restaurants in town at<br className="hidden sm:block" />
          the tap of a button.
        </p>
        
        <button className="w-[240px] sm:w-[260px] md:w-[295px] h-[60px] sm:h-[70px] md:h-[80px] bg-[#00B0C8] text-white border-none rounded-[73px] cursor-pointer transition-colors duration-200 hover:bg-cyan-600 flex items-center justify-center">
          <span className="font-['Poppins'] font-semibold text-[18px] sm:text-[22px] md:text-[26px] whitespace-nowrap">
            Order Now
          </span>
        </button>
      </div>

      {/*img container */}
      <div className="flex flex-col items-center justify-center relative mt-8 lg:mt-0 lg:pl-[40px]">
        <div className="relative w-[200px] sm:w-[240px] md:w-[298px] h-[380px] sm:h-[450px] md:h-[557px]">
          {/* bg rectangle */}
          <div className="absolute bottom-[24px] left-0 w-full h-[50%] rounded-[47px] sm:rounded-[40px] md:rounded-[47px] bg-[#00AFCA] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] z-10"></div>
          {/* wizard image */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[90%] rounded-[20px] sm:rounded-[23px] flex items-center justify-center z-20">
            <img src="/images/Wizard.png"   className="w-full h-full object-cover rounded-[20px] sm:rounded-[23px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;