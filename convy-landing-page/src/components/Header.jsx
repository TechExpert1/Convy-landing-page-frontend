const Header = () => {
  return (
    <nav className="shadow-sm bg-[#00B0C8] h-[70px] w-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[200px]">
      <img src="/images/Convy_app_logo 1.png" className="h-[25px] sm:h-[28px] md:h-[33px]" />
      <button className="w-[120px] sm:w-[140px] md:w-[168px] h-[35px] sm:h-[40px] md:h-[45px] border border-white rounded-full text-center text-white text-[14px] sm:text-[16px] md:text-[18px] font-['Montserrat'] font-semibold">
        Get The App
      </button>
    </nav>
  );
};

export default Header;