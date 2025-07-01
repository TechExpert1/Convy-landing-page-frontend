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
    <section className="py-[28px] bg-white">
      <div className="font-['Poppins'] flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-[56px]">
          <h2 className="text-[36px] max-w-[503px] w-full h-[54px] font-medium leading-snug mx-auto text-[#00B0C8] mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-[1221px] grid grid-cols-1 md:grid-cols-2 gap-x-[94px] gap-y-[62px] mx-auto items-start">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white shadow-none max-w-[556px] w-full border-b border-[#00000026] flex flex-col justify-start items-start transition-all duration-200"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className={`w-full px-6 pt-4 pb-4 text-left flex justify-between items-start hover:bg-gray-50 transition-colors ${
                  openFAQ === i ? 'mb-[36px]' : ''
                }`}
              >
                <span className="font-medium text-[28px] leading-snug text-[#333333]">{faq.question}</span>
                <span className="ml-4">
                  <img
                    src="/images/icons/faqic.png"  className={`w-[12.5px] h-[22.7px] transition-transform duration-200 ${openFAQ === i ? 'rotate-[90deg]' : ''}`}
                  />
                </span>
              </button>
              {openFAQ === i && (
                <div className="px-6 pb-[24px]">
                  <p className="font-['Poppins'] font-normal text-[24px] text-[#797979] leading-snug">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;