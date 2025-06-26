const AppPreview = () => {
  return (
    <section className="bg-white py-20 -mt-[42px]">
      <div className="max-w-[1240px] max-h-[567.4px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start lg:-ml-[50px]">
            <img src="/images/appPreview.png" className="w-[436.09px] h-[567.43px] object-contain rounded-[32px]" />
          </div>
          <div className="order-1 lg:order-2 -mt-[40px] lg:-mt-[136px] -ml-[8px] lg:-ml-[62px] font-['Poppins'] ">
            <h2 className="w-[698px] h-[120px] font-bold text-[40px] leading-snug text-[#333333] mb-6">
              Bringing you the best <span className="text-[#00B0C8]">meals</span> with
              <br />
              <span className="text-[#00B0C8]">convenience</span> and care.
            </h2>
            <p className="w-[679px] h-[78px]  font-normal text-[26px] leading-snug text-[#797979] mb-8">
              We deliver hot, fresh meals to your doorstep, satisfying every craving with speed and quality.
            </p>
            <button
              className="w-[295px] h-[80px] rounded-[73px] bg-[#00B0C8] text-white flex items-center justify-center hover:bg-cyan-600 transition-colors"
            >
              <span className="w-[129px] h-[39px] font-['Poppins'] font-semibold text-[26px] text-[#fff] flex items-center justify-center">
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
