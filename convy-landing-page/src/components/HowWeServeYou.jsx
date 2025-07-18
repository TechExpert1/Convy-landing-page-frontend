const HowWeServeYou = () => {
  const serveBoxes = [
    { image: "/images/CarefulPackaging.png", title: "Careful Packaging", size: "191px 198px" },
    { image: "/images/PackedWithLove.png", title: "Packed with Love", size: "272px 261px" },
    { image: "/images/Appetite.png", title: "Serve Hot Appetite", size: "135px 141px" }
  ];

  return (
    <section className="lg:py-[56px] sm:py-[26px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-[35px] text-['Poppins']">
          <h2 className="lg:text-[36px] sm:text-[14px] leading-snug max-w-[334px] font-medium text-[#00B0C8] lg:mb-[27px] sm:mb-[5px] mx-auto text-center">
            How We Serve You
          </h2>
          <p className="font-bold max-w-[801px] leading-snug text-[40px] sm:text-[16px] md:text-[40px] text-[#333333] mb-[35px] sm:mb-[20px] md:mb-[35px] mx-auto text-center">
            Serving happiness, one meal at a time!
          </p>
        </div>
        <div className="w-full max-w-[1126px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-2 md:gap-[53px] mb-[56px]">
          {serveBoxes.map(({ image, title, size }) => (
            <div
              key={title}
              className="w-[calc(100vw-26px)] lg:max-w-[354px] sm:w-full h-[340px] md:h-[401px] sm:h-[182px] flex flex-col items-center justify-between lg:rounded-[20px] sm:rounded-[5px] p-8 mb-6 border border-[#00000033] transition-colors duration-200 group bg-white hover:bg-[#00B0C8] hover:border-[#00B0C8] shadow-[0px_2px_7px_0px_#0000001F] mx-auto"
            >
              <div className="w-full flex items-center justify-center flex-grow">
                <img
                  src={image}
                  className={
                    "object-contain " + (image.includes("CarefulPackaging")
                      ? "lg:w-[191px] lg:h-[198px] sm:w-[91px] sm:h-[94px]" : image.includes("PackedWithLove")
                      ? "lg:w-[272px] lg:h-[261px] sm:w-[102px] sm:h-[98px]" : image.includes("Appetite")
                      ? "lg:w-[135px] lg:h-[141px] sm:w-[60px] sm:h-[62px] mb-0 mt-0 sm:mt-3 sm:mb-6" : "")
                  }
                />
              </div>
              <h3 className="w-[262px] h-[42px] font-['Poppins'] font-medium text-[28px] sm:text-[14px] md:text-[20px] lg:text-[28px] leading-snug text-gray-900 transition-colors duration-200 group-hover:text-white text-center mb-4">
                {title}
              </h3>
            </div>
          ))}
        </div>
        <div className="w-full max-w-[1240px] bg-[#00B0C81A] rounded-[28px] p-4 sm:p-3 md:p-12 pt-0 mt-4 sm:mt-3 md:mt-[133px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center items-center -mt-16 sm:-mt-[50px] md:-mt-[130px] lg:-mt-[130px] md:-ml-[200px]">
              <img
                src="/images/PhoneMockup.png"
                className="w-[180px] h-[350px] sm:w-[98px] sm:h-[204px] md:w-[323px] md:h-[695px] object-contain rounded-b-[40px] sm:rounded-b-[10px] md:rounded-b-[40px] rounded-t-[40px] sm:rounded-t-[10px]"
              />
            </div>
            <div className="font-['Poppins'] mt-6 sm:-mt-4 md:mt-[40px] lg:-ml-[150px] text-left sm:text-center">
              <h2 className="text-[#00B0C8] max-w-[316px] font-medium text-[34px] sm:text-[12px] md:text-[34px] mb-[19px] sm:mb-[6px] md:mb-[19px] lg:text-left sm:text-center">
                Download the app
              </h2>
              <h3 className="text-[40px] sm:text-[14px] md:text-[40px] max-w-[469px] font-bold text-[#333333] mb-[19px] sm:mb-[6px] md:mb-[19px] leading-tight lg:text-left sm:text-center">
                Get the App, Savor the Convenience
              </h3>
              <p className="text-[#333333] mb-[19px] sm:mb-[8px] md:mb-[19px] font-normal text-[28px] sm:text-[9px] md:text-[28px] w-full max-w-[696px] leading-relaxed lg:text-left sm:text-center">
                Delicious meals are just a tap away - download<br className="hidden md:block" />
                <span className="md:hidden"> </span>now and order on the go!
              </p>
              <div className="flex flex-col xs:flex-row sm:flex-row sm:items-center sm:justify-center sm:gap-2 md:flex-row md:justify-start md:items-center gap-2 md:gap-12 mt-4 sm:mt-2">
                <button className="flex items-center bg-[#231F20] text-white w-full max-w-[120px] h-[32px] sm:max-w-[61px] sm:h-[24px] md:h-[114px] md:max-w-[284px] md:rounded-[33px] sm:rounded-[8px] px-2 sm:px-2 md:px-6">
                  <img src="/images/icons/AppleStore.png" className="w-[13px] h-[13px] sm:w-[10px] sm:h-[10px] md:w-[50px] md:h-[50px] mr-2 sm:-mr-0 md:mr-4 flex-shrink-0" />
                  <div className="flex flex-col justify-center font-['Roboto'] min-w-0 flex-1 sm:ml-1">
                    <span className="font-normal text-[7px] sm:text-[4.35px] md:text-[20px] leading-tight text-[#FFFFFFC9] text-left">
                      Get App
                    </span>
                    <span className="font-bold text-[10px] sm:text-[6px] md:text-[28px] text-left">
                      App Store
                    </span>
                  </div>
                </button>
                <button className="flex items-center bg-[#E6E6E6] text-[#363636] w-full max-w-[120px] h-[32px] sm:max-w-[61px] sm:h-[24px] md:h-[114px] md:max-w-[284px] md:rounded-[33px] sm:rounded-[8px] px-2 sm:px-2 md:px-6">
                  <img src="/images/icons/PlayStore.png" className="w-[13px] h-[13px] sm:w-[10px] sm:h-[10px] md:w-[50px] md:h-[50px] mr-2 sm:-mr-0 md:mr-4 flex-shrink-0" />
                  <div className="flex flex-col justify-center font-['Roboto'] min-w-0 flex-1 sm:ml-1">
                    <span className="font-normal text-[7px] sm:text-[4.35px] md:text-[20px] leading-tight text-[#212121C9] text-left">
                      Get App
                    </span>
                    <span className="font-bold text-[10px] sm:text-[6px] md:text-[28px] text-left text-[#363636]">
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