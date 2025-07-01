import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#00B0C8] text-white mt-[60px] pb-[42px]">
        <div className="max-w-[1440px] w-full h-[461px] mx-auto px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[345px] font-['Poppins'] items-center ">
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex flex-col items-start mt-[74px] mb-4">
                <img src="/images/Convy_app_logo 1.png" className="w-[216px] h-[84px] object-contain" />
              </div>
              <p className="text-white text-[20px] leading-[34px] w-[376px] h-[136px] font-normal">
                Stay connected with us for great meals, updates, and opportunities – 
                your satisfaction is our priority every step of the way!
              </p>
              <div className="flex space-x-[26px]">
                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer">
                  <img src="/images/icons/facebook.png" className="w-[10.5px] h-[20px]" alt="Facebook" />
                </div>
                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer">
                  <img src="/images/icons/instagram.png" className="w-[20px] h-[20px]" alt="Instagram" />
                </div>
                <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer">
                  <img src="/images/icons/x.png" className="w-[14px] h-[14px]" alt="X" />
                </div>
              </div>
            </div>

            {/*Newsletter sec*/}
            <div className="mt-[154px] mb-[154px] space-y-6">
              <div>
                <h3 className="w-[388px] h-[58px] text-[22px] font-bold mb-[28px]">
                  Get the latest information and <br />subscribe to our newsletter
                </h3>
              </div>
              <div className="relative w-[380px] h-[68px]">
                <input
                  type="email" placeholder="Enter email" className="w-full h-full px-6 rounded-[17px] text-[#4F4E4E] placeholder-[#4F4E4E] bg-white text-[17px] font-normal pr-20"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-2 rounded-full flex items-center justify-center">
                  <img src="/images/icons/send.png" className="w-[33px] h-[33px]" alt="Send" />
                </button>
              </div>
            </div>

            {/*contact info*/}
            <div className="space-y-6 mt-[166.5px] mb-[166.5px]">
              <h3 className="text-[22px] leading-[34px] w-[92px] h-[34px] font-bold">Contact</h3>
              <div className="space-y-3 text-white text-[20px] leading-[34px] font-normal">
                <p>+123 456 7890</p>
                <p>info@convy.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full flex justify-center items-center bg-white mt-[28px] mb-[28px]">
        <p
          className="font-['Roboto'] font-medium text-[30px] leading-[34px] text-[#231F20] text-center"
          style={{ width: 456, height: 34, verticalAlign: 'middle' }}
        >
          © 2024 Convy. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;