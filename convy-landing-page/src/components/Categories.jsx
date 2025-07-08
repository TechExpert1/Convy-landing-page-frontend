import React, { useRef } from 'react';

const categories = [
  { name: 'Soft Drinks', image: '/images/SoftDrinks.png' },
  { name: 'Chicken Pizza', image: '/images/Pizza.png' },
  { name: 'Desserts', image: '/images/Desserts.png' },
  // Repeat for demo scroll effect
  { name: 'Soft Drinks', image: '/images/SoftDrinks.png' },
  { name: 'Chicken Pizza', image: '/images/Pizza.png' },
  { name: 'Desserts', image: '/images/Desserts.png' }
];

const Categories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const isMobile = window.innerWidth < 768;
    let scrollAmount;
    if (isMobile) {
      //scroll by the width of 1 card+gap
      const cardWidth = container.scrollWidth / categories.length;
      scrollAmount = cardWidth;
    } else {
      //scroll by full container width to show next 3
      const containerWidth = container.offsetWidth;
      scrollAmount = containerWidth;
    }
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-[28px] px-4 sm:px-2 md:px-8 lg:px-16">
      <div className="max-w-[1242.55px] mx-auto px-2 sm:px-2 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row w-full justify-center md:justify-between items-center mb-6 sm:mb-2 md:mb-[27px] gap-3 sm:gap-28">
          <h2 className="w-full sm:w-full md:w-[350px] h-auto md:h-[54px] font-['Poppins'] font-medium text-[24px] sm:text-[18px] md:text-[32px] whitespace-nowrap lg:text-[36px] leading-snug text-[#00B0C8] ml-0 sm:ml-[0px] md:-ml-[55px] mb-2 md:mb-0 text-left self-start">
            Popular Categories
          </h2>
          <div className="flex space-x-2 sm:space-x-3 md:space-x-4 mr-0 md:mr-[-35px]">
            <button
              onClick={() => scroll('left')}
              className="bg-[#D9D9D942] hover:bg-gray-300 w-[40px] h-[40px] sm:w-[24px] sm:h-[24px] md:w-[60px] md:h-[60px] lg:w-[71.15px] lg:h-[71.15px] rounded-full flex items-center justify-center transition-colors"
              type="button"
              aria-label="Scroll left"
            >
              <img src="/images/icons/backwardArrow.png" className="w-[16px] h-[16px] sm:w-[12px] sm:h-[12px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-[#00B0C8] hover:bg-cyan-600 w-[40px] h-[40px] sm:w-[24px] sm:h-[24px] md:w-[60px] md:h-[60px] lg:w-[71.15px] lg:h-[71.15px] rounded-full flex items-center justify-center transition-colors"
              type="button"
              aria-label="Scroll right"
            >
              <img src="/images/icons/forwardArrow.png" className="w-[16px] h-[16px] sm:w-[12px] sm:h-[12px] md:w-[26px] md:h-[26px] lg:w-[30px] lg:h-[30px]" />
            </button>
          </div>
        </div>

        <p className="w-auto md:w-[698px] h-auto md:h-[120px] font-['Poppins'] font-bold text-[22px] sm:text-[16px] md:text-[36px] lg:text-[40px] leading-snug text-[#333333] mb-6 sm:mb-8 ml-0 md:ml-[-55px] text-center sm:text-left">
          From your favorite restaurants to<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>your doorstep!
        </p>

        {/*scrollable container for categories*/}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-4 sm:gap-6 md:gap-8"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map(cat => (
              <div key={Math.random() + cat.name} className="text-center transition-colors duration-200 flex-shrink-0 flex justify-center" style={{ minWidth: 'calc(33.333% - 21.33px)' }}>
                <div className="w-full max-w-[354px] sm:w-[334px] md:w-[320px] lg:w-[348px] h-[350px] sm:h-[230px] md:h-[390px] lg:h-[402px] rounded-[18px] lg:rounded-[18px] sm:rounded-[5px] border border-[#00000033] p-4 sm:p-6 md:p-8 mb-4 bg-white transition-colors duration-200 hover:bg-[#00B0C8] group flex flex-col justify-start">
                  <div className="w-full flex items-center justify-center mb-3 sm:mb-4 flex-grow">
                    <img src={cat.image} className="w-[160px] h-[152px] sm:w-[102px] sm:h-[98px] md:w-[200px] md:h-[190px] lg:w-[217px] lg:h-[207px] object-contain" alt={cat.name} />
                  </div>
                  <h3
                    className={`w-full sm:w-[130px] md:w-[138px] h-auto font-['Poppins'] font-medium text-[20px] sm:text-[14px] md:text-[24px] lg:text-[26px] leading-snug text-[#333333] transition-colors duration-200 group-hover:text-white whitespace-nowrap flex flex-col justify-end mt-2 sm:mt-4 md:mt-[34px] py-[8px] sm:py-[10px] md:py-[11px] ${
                      cat.name === 'Chicken Pizza' ? 'ml-0 sm:ml-[70px] md:ml-4 lg:ml-[40px]': 'mx-auto'
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className={`w-full sm:w-[63px] whitespace-nowrap md:w-[150px] h-auto font-['Poppins'] font-normal text-[18px] sm:text-[12px] md:text-[22px] leading-[100%] text-[#333333] flex items-center mx-auto transition-colors duration-200 group-hover:text-white ${
                      cat.name === 'Chicken Pizza' ? 'ml-0 sm:ml-[95px] md:ml-6 lg:ml-16' : ''
                    }`}
                  >
                    Order Now
                    <span className="ml-2 flex items-center">
                      <img src="/images/icons/gt-black.png" alt=">" className="group-hover:hidden inline w-[8px] h-[12px] sm:w-[7px] sm:h-[8px] md:w-[10.58px] md:h-[14.29px] ml-[5px] sm:ml-[4px]" />
                      <img src="/images/icons/gt.png" alt=">" className="hidden group-hover:inline w-[8px] h-[12px] sm:w-[7px] sm:h-[8px] md:w-[10.58px] md:h-[14.29px] ml-[5px] sm:ml-[4px]" />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-2 md:mt-8">
          <button className="bg-[#00B0C8] w-full lg:w-[295px] sm:w-[334px] h-[60px] sm:h-[38px] md:h-[80px] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-[14px] md:text-xl font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center mx-auto">
            <span className="font-['Poppins'] font-semibold text-[18px] sm:text-[14px] md:text-[26px] leading-[100%] tracking-[0%] text-white w-full text-center">
              See more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;