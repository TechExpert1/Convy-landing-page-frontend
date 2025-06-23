import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse our menu, select your items, and proceed to checkout. You can pay online or choose cash on delivery."
    },
    {
      question: "How can I place an order?",
      answer: "You can place an order through our mobile app or website. Just select your favorite restaurant and add items to your cart."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery for your convenience."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, digital wallets, and cash on delivery."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is placed, you'll receive a tracking link via SMS and email. You can also track it in real-time through our app."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order in real-time through our app or website using the tracking number provided."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className="text-2xl text-cyan-500">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
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