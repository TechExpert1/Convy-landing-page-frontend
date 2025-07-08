import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { question: "How do I place an order?", answer: "Simply browse our menu, select your items, and proceed to checkout. You can pay online or choose cash on delivery." },
    { question: "How can I place an order?", answer: "You can place an order through our mobile app or website. Just select your favorite restaurant and add items to your cart." },
    { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, mobile wallets, and cash on delivery." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, digital wallets, and cash on delivery." },
    { question: "How can I track my order?", answer: "Once your order is placed, you'll receive a tracking link via SMS and email. You can also track it in real-time through our app." },
    { question: "How can I track my order?", answer: "You can track your order in real-time through our app or website using the tracking number provided." }
  ];

  return (
    <section className="md:py-[28px] py-[10px] bg-white">
      <div className="font-['Poppins'] flex flex-col items-center px-4 sm:px-2 lg:px-8">
        <div className="text-center mb-[16px] sm:mb-[0px] md:mb-[56px]">
          <h2 className="text-[18px] xs:text-[20px] sm:text-[16px] md:text-[36px] max-w-[503px] w-full min-h-[28px] sm:min-h-[24px] font-medium leading-snug mx-auto text-[#00B0C8] mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-full max-w-[1221px] grid grid-cols-1 md:grid-cols-2 gap-x-3 md:gap-x-[94px] gap-y-4 md:gap-y-[62px] mx-auto items-start">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white shadow-none max-w-full md:max-w-[556px] w-full border-b sm:border-[#00000010] md:border-[#00000026] flex flex-col justify-start items-start transition-all duration-200
                ${openFAQ === i ? 'md:row-span-2' : ''}
                ${(i === 1 || i === 3 || i === 5) ? 'hidden md:flex' : ''}
              `}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className={`w-full px-2 xs:px-3 sm:px-2 pt-2 xs:pt-3 pb-2 xs:pb-3 text-left flex justify-between items-start hover:bg-gray-50 transition-colors ${
                  openFAQ === i ? 'mb-[8px] sm:mb-[12px] md:mb-[36px]' : ''
                }`}
              >
                <span className="font-medium text-[13px] xs:text-[15px] sm:text-[12px] md:text-[28px] leading-snug text-[#333333]">{faq.question}</span>
                <span className="ml-2 xs:ml-3">
                  <img
                    src="/images/icons/faqic.png"
                    className={`w-[9px] h-[15px] xs:w-[11px] xs:h-[19px] md:w-[12.5px] md:h-[22.7px] sm:w-[8px] sm:h-[12px] transition-transform duration-200 ${openFAQ === i ? 'rotate-[90deg]' : ''}`}
                  />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFAQ === i ? 'max-h-[500px] sm:min-h-[10px] md:min-h-[60px]' : 'max-h-0'} w-full`}>
                {openFAQ === i && (
                  <div className="px-2 xs:px-3 sm:px-3 md:px-4 pb-[8px] sm:pb-[5px] md:pb-[24px]">
                    <p className="font-['Poppins'] font-normal text-[10px] xs:text-[14px] sm:text-[10px] md:text-[24px] text-[#797979] leading-snug">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;