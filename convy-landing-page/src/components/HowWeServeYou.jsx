const HowWeServeYou = () => {
  const serveBoxes = [
    { image: "/images/CarefulPackaging.png", title: "Careful Packaging", size: "191px 198px" },
    { image: "/images/PackedWithLove.png", title: "Packed with Love", size: "272px 261px" },
    { image: "/images/Appetite.png", title: "Serve Hot Appetite", size: "135px 141px" }
  ];

  return (
    <section className="py-[56px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-[35px] text-['Poppins']">
          <h2 className="text-[36px] leading-snug max-w-[334px] font-medium text-[#00B0C8] mb-[27px] mx-auto text-center">
            How We Serve You
          </h2>
          <p className="font-bold max-w-[801px] leading-snug text-[40px] sm:text-[32px] md:text-[40px] text-[#333333] mb-[35px] sm:mb-[20px] md:mb-[35px] mx-auto text-center">
            Serving happiness, one meal at a time!
          </p>
        </div>
        <div className="w-full max-w-[1126px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[53px] mb-[56px]">
          {serveBoxes.map(({ image, title, size }) => (
            <div
              key={title}
              className="w-full max-w-[340px] h-[340px] md:h-[401px] flex flex-col items-center justify-between rounded-[20px] p-8 mb-6 border border-[#00000033] transition-colors duration-200 group bg-white hover:bg-[#00B0C8] hover:border-[#00B0C8] shadow-[0px_2px_7px_0px_#0000001F] mx-auto"
            >
              <div className="w-full flex items-center justify-center flex-grow">
                <img
                  src={image}
                  className={
                    "object-contain " + (image.includes("CarefulPackaging")
                      ? "w-[191px] h-[198px]" : image.includes("PackedWithLove")
                      ? "w-[272px] h-[261px]" : image.includes("Appetite")
                      ? "w-[135px] h-[141px]" : "")
                  }
                />
              </div>
              <h3 className="w-[262px] h-[42px] font-['Poppins'] font-medium text-[28px] md:text-[20px] lg:text-[28px] leading-snug text-gray-900 transition-colors duration-200 group-hover:text-white text-center mb-4">
                {title}
              </h3>
            </div>
          ))}
        </div>
        <div className="w-full max-w-[1240px] bg-[#00B0C81A] rounded-[28px] p-4 sm:p-8 md:p-12 pt-0 mt-10 md:mt-[133px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center items-center -mt-16 sm:-mt-[70px] md:-mt-[130px] lg:-mt-[130px] md:-ml-[200px]">
              <img
                src="/images/PhoneMockup.png"
                className="w-[180px] h-[350px] sm:w-[220px] sm:h-[450px] md:w-[323px] md:h-[695px] object-contain rounded-b-[40px] sm:rounded-b-[30px] md:rounded-b-[40px] rounded-t-[40px]"
              />
            </div>
            <div className="font-['Poppins'] mt-6 md:mt-[40px] lg:-ml-[150px]">
              <h2 className="text-[#00B0C8] max-w-[316px] font-medium text-[34px] sm:text-[28px] md:text-[34px] mb-[19px] sm:mb-[10px] md:mb-[19px]">
                Download the app
              </h2>
              <h3 className="text-[40px] sm:text-[28px] md:text-[40px] max-w-[469px] font-bold text-[#333333] mb-[19px] sm:mb-[10px] md:mb-[19px] leading-tight">
                Get the App, Savor the<br />Convenience
              </h3>
              <p className="text-[#333333] mb-[19px] sm:mb-[15px] md:mb-[19px] font-normal text-[28px] sm:text-[18px] md:text-[28px] w-full max-w-[696px] leading-relaxed">
                Delicious meals are just a tap away - download<br className="hidden md:block" />
                <span className="md:hidden"> </span>now and order on the go!
              </p>
              <div className="flex flex-col xs:flex-row sm:flex-col sm:items-center sm:justify-center sm:gap-2 md:flex-row md:justify-start md:items-center gap-2 md:gap-12 mt-4 sm:mt-6">
                <button className="flex items-center bg-[#231F20] text-white w-full max-w-[120px] h-[32px] sm:max-w-[284px] sm:h-[90px] md:h-[114px] rounded-[10px] sm:rounded-[33px] px-1.5 sm:px-6">
                  <img src="/images/icons/AppleStore.png" className="w-[13px] h-[13px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] mr-1.5 sm:mr-4 flex-shrink-0" />
                  <div className="flex flex-col justify-center font-['Roboto'] min-w-0">
                    <span className="font-normal text-[7px] sm:text-[16px] md:text-[20px] leading-[9px] sm:leading-[23px] text-[#FFFFFFC9] text-left truncate">
                      Get App
                    </span>
                    <span className="font-bold text-[10px] sm:text-[20px] md:text-[28px] text-left truncate">
                      App Store
                    </span>
                  </div>
                </button>
                <button className="flex items-center bg-[#E6E6E6] text-[#363636] w-full max-w-[120px] h-[32px] sm:max-w-[284px] sm:h-[90px] md:h-[114px] rounded-[10px] sm:rounded-[33px] px-1.5 sm:px-6">
                  <img src="/images/icons/PlayStore.png" className="w-[13px] h-[13px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] mr-1.5 sm:mr-4 flex-shrink-0" />
                  <div className="flex flex-col justify-center font-['Roboto'] min-w-0">
                    <span className="font-normal text-[7px] sm:text-[16px] md:text-[20px] leading-[9px] sm:leading-[23px] text-[#212121C9] text-left truncate">
                      Get App
                    </span>
                    <span className="font-bold text-[10px] sm:text-[20px] md:text-[28px] text-left text-[#363636] truncate">
                      Play Store
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default HowWeServeYou;