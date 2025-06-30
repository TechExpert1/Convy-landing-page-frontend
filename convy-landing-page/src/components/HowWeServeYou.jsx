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
          <h2 className="text-[36px] leading-snug max-w-[334px] max-h-[54px] font-medium text-[#00B0C8] mb-[27px] mx-auto text-center">
            How We Serve You
          </h2>
          <p className="font-bold max-w-[801px] max-h-[60px] leading-snug text-[40px] text-[#333333] mb-[35px] mx-auto text-center">
            Serving happiness, one meal at a time!
          </p>
        </div>

        <div className="w-[1126px] h-[401px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[53px] mb-[56px]">
          {serveBoxes.map(({ image, title, size }) => (
            <div key={title} className="w-[340px] h-[401px] flex flex-col items-center justify-between rounded-[20px] p-8 mb-6 border border-[#00000033] transition-colors duration-200 group bg-white hover:bg-[#00B0C8] hover:border-[#00B0C8] shadow-[0px_2px_7px_0px_#0000001F]">
              <div className="w-full flex items-center justify-center flex-grow">
                <img
                  src={image}
                  className={
                    "object-contain " + (image.includes("CarefulPackaging") ? "w-[191px] h-[198px]" : image.includes("PackedWithLove")
                      ? "w-[272px] h-[261px]" : image.includes("Appetite")
                      ? "w-[135px] h-[141px]" : "")
                  }
                />
              </div>
              <h3 className="w-[262px] h-[42px] font-['Poppins'] font-medium text-[28px] leading-snug text-gray-900 transition-colors duration-200 group-hover:text-white text-center mb-4"> {title} </h3>
            </div>
          ))}
        </div>

        <div className="w-[1240px] h-[674px] bg-[#00B0C81A] rounded-[28px] p-12 pt-0 mt-[133px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center -mt-[77px] -ml-[200px]">
              <img src="/images/PhoneMockup.png" className="w-[323px] h-[695px] object-contain rounded-[40px]" />
            </div>
            <div className="font-['Poppins'] -ml-[150px] mt-[40px]">
              <h2 className="text-[#00B0C8] max-w-[316px] max-h-[51px] font-medium text-[34px] mb-[19px]">Download the app</h2>
              <h3 className="text-[40px] max-w-[469px] max-h-[120px] font-bold text-[#333333] mb-[19px]">Get the App, Savor the<br />Convenience</h3>
              <p className="text-lg text-[#333333] mb-[19px] font-normal text-[28px] w-[696px] h-[84px]">Delicious meals are just a tap away - download<br />now and order on the go!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center bg-[#231F20] text-white w-[284px] h-[114px] rounded-[33px] px-6">
                  <img src="/images/icons/AppleStore.png" className="w-[50px] h-[50px] mr-4" />
                  <div className="flex flex-col justify-center font-['Roboto']">
                    <span className="w-[125px] h-[23px] font-normal text-[20px] leading-[23px] text-[#FFFFFFC9] text-left">Get App</span>
                    <span className="w-[125px] h-[33px] font-bold text-[28px] text-left whitespace-nowrap">App Store</span>
                  </div>
                </button>
                <button className="flex items-center bg-[#E6E6E6] text-[#363636] w-[284px] h-[114px] rounded-[33px] px-6">
                  <img src="/images/icons/PlayStore.png" className="w-[50px] h-[50px] mr-4"/>
                  <div className="flex flex-col justify-center font-['Roboto']">
                    <span className="w-[125px] h-[23px] font-normal text-[20px] leading-[23px] text-[#212121C9] text-left">Get App</span>
                    <span className="w-[125px] h-[33px] font-bold text-[28px] text-left whitespace-nowrap text-[#363636]">Play Store</span>
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