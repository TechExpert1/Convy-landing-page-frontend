const Header = () => {
  return (
    <nav className="shadow-sm bg-[#00B0C8] md:h-[70px] sm:h-[48px] w-full flex items-center justify-between px-4 sm:px-4 md:px-16 lg:px-[120px]">
      <img src="/images/Convy_app_logo 1.png" className=" w-[48.94px] h-[19px] sm:h-[19px] md:w-auto md:h-[33px] min-w-0 min-h-0"/>
      <button
        className=" w-[104.53px] h-[28px] sm:w-[104px] sm:h-[28px] md:w-[140px] md:h-[40px] lg:w-[168px] lg:h-[45px] border border-white rounded-full text-center text-white text-[14px] sm:text-[12px] md:text-[18px] font-['Montserrat'] font-semibold"
      >
        Get The App
      </button>
    </nav>
  );
};

export default Header;