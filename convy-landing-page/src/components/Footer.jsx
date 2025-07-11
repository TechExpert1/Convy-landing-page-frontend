const Footer = () => {
  return (
    <>
      <footer className="bg-[#00B0C8] text-white mt-[60px] md:mt-[60px] sm:mt-[20px] pb-[42px] md:pb-[42px] sm:pb-[15px]">
        <div className="max-w-[1440px] w-full lg:h-[461px] mx-auto lg:px-[50px] md:px-8 sm:px-1 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[345px] gap-y-8 lg:gap-y-0 font-['Poppins'] lg:items-center">
            {/* Logo and Description Section */}
            <div className="lg:space-y-6 space-y-4 lg:pl-12 lg:-mt-[60px] sm:-mt-[20px] md:pl-8 pl-4">
              <div className="flex flex-col items-start lg:mt-[74px] md:mt-12 mt-8 mb-4">
                <img 
                  src="/images/Convy_app_logo 1.png" 
                  className="lg:w-[216px] lg:h-[84px] sm:w-[60px] sm:h-[24px] md:w-[180px] md:h-[70px] w-[160px] h-[62px] object-contain" 
                  alt="Convy Logo"
                />
              </div>
              <p className="text-white lg:text-[20px] md:text-[18px] sm:text-[8px] text-[16px] lg:leading-[34px] md:leading-[28px] sm:leading-snug leading-[24px] lg:w-[376px] lg:h-[136px] font-normal">
                Stay connected with us for great meals, updates, and opportunities – 
                your satisfaction is our priority every step of the way!
              </p>
              <div className="flex lg:space-x-[26px] md:space-x-5  sm:space-x-[10.36px] space-x-4">
                <div className="lg:w-12 lg:h-12 sm:w-[19px] sm:h-[19px] md:w-10 md:h-10 w-9 h-9 aspect-square border border-white rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer">
                  <img src="/images/icons/facebook.png" className="lg:w-[10.5px] lg:h-[20px] sm:w-[4px] sm:h-[8px] md:w-[9px] md:h-[17px] w-[8px] h-[15px]" />
                </div>
                <div className="lg:w-12 lg:h-12 sm:w-[19px] sm:h-[19px] md:w-10 md:h-10 w-9 h-9 aspect-square border border-white rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer">
                  <img src="/images/icons/instagram.png" className="lg:w-[20px] lg:h-[20px] sm:w-[8px] sm:h-[8px] md:w-[17px] md:h-[17px] w-[15px] h-[15px]" />
                </div>
                <div className="lg:w-12 lg:h-12 sm:w-[19px] sm:h-[19px] md:w-10 md:h-10 w-9 h-9 aspect-square border border-white rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer">
                  <img src="/images/icons/x.png" className="lg:w-[14px] lg:h-[14px] sm:w-[5.6px] sm:h-[5.6px] md:w-[12px] md:h-[12px] w-[11px] h-[11px]"/>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:mt-[154px] lg:mb-[154px] lg:space-y-6 space-y-4 sm:ml-4 md:ml-0 sm:-mt-4 md:mt-0">
              <div>
                <h3 className="lg:w-[388px] lg:h-[58px] lg:text-[22px] md:text-[20px] sm:text-[10px] text-[18px] font-bold lg:mb-[28px] md:mb-6 mb-4 lg:leading-[29px] md:leading-[26px] sm:leading-snug leading-[24px]">
                  Get the latest information <span className="hidden lg:inline">and</span><br className="hidden lg:block" />
                  <span className="lg:hidden">and </span>subscribe to our newsletter
                </h3>
              </div>
              <div className="relative lg:w-[380px] lg:h-[68px] md:w-[340px] md:h-[60px] sm:w-[161px] sm:h-[29px] w-full h-[56px]">
                <input type="email" placeholder="Enter email" className="w-full h-full lg:px-6 md:px-5 px-4 md:rounded-[17px] sm:rounded-[7.2px] text-[#4F4E4E] placeholder-[#4F4E4E] bg-white lg:text-[17px] md:text-[16px] sm:text-[8px] text-[15px] font-normal pr-16"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 md:px-2 sm:px-[6px] rounded-full flex items-center justify-center">
                  <img src="/images/icons/send.png" className="lg:w-[33px] lg:h-[33px] md:w-[28px] md:h-[28px] sm:w-[14px] sm:h-[14px] w-[25px] h-[25px]"/>
                </button>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="lg:space-y-6 space-y-1 sm:space-y-1 md:space-y-4 lg:mt-[166.5px] lg:mb-[166.5px] sm:ml-4 md:ml-0 sm:-mt-3 md:-mt-0">
              <h3 className="lg:text-[22px] md:text-[20px] sm:text-[10px]  text-[18px] lg:leading-[34px] sm:leading-snug md:leading-[28px] leading-[24px] lg:w-[92px] lg:h-[34px] font-bold">Contact</h3>
              <div className="space-y-0 sm:space-y-0.5 md:space-y-3 text-white lg:text-[20px] md:text-[18px] sm:leading-snug sm:text-[8px] text-[16px] lg:leading-[34px] md:leading-[28px] leading-[24px] font-normal">
                <p>+123 456 7890</p>
                <p>info@convy.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Copyright Section */}
      <div className="w-full flex justify-center items-center bg-white lg:mt-[28px] lg:mb-[28px] md:mt-6 md:mb-6 mt-4 mb-4">
        <p
          className="font-['Roboto'] font-medium lg:text-[30px] md:text-[24px] sm:text-[9px] text-[18px] lg:leading-[34px] md:leading-[28px] sm:leading-normal leading-[24px] text-[#231F20] text-center lg:w-auto lg:h-[34px] w-full px-4 whitespace-normal lg:whitespace-nowrap align-middle"
        >
          © 2024 Convy. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;