const AppPreview = () => {
  return (
    <section className="bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-8 lg:px-2">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-0 items-center lg:-ml-[24px]">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-center">
            <img src="/images/appPreview.png" className="w-[250px] h-[325px] sm:w-[300px] sm:h-[390px] md:w-[350px] md:h-[455px] lg:w-[436.09px] lg:h-[567.43px] object-contain rounded-[20px] sm:rounded-[25px] md:rounded-[32px]" />
          </div>
          <div className="order-1 lg:order-2 font-['Poppins'] max-w-[703px] flex flex-col items-start justify-center text-left">
            <h2 className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-tight text-[#333333] mb-4 sm:mb-6">
              Bringing you the best <span className="text-[#00B0C8]">meals</span> with
              <br className="hidden sm:block" />
              <span className="text-[#00B0C8]">convenience</span> and care.
            </h2>
            <p className="font-normal text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] leading-relaxed text-[#797979] mb-6 sm:mb-8">
              We deliver hot, fresh meals to your doorstep, satisfying every craving with speed and quality.
            </p>
            <button className="w-[200px] sm:w-[250px] md:w-[295px] h-[60px] sm:h-[70px] md:h-[80px] rounded-full bg-[#00B0C8] text-white flex items-center justify-center hover:bg-cyan-600 transition-colors">
              <span className="font-['Poppins'] font-semibold text-[18px] sm:text-[22px] md:text-[26px] text-[#fff] flex items-center justify-center">
                Try it Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;