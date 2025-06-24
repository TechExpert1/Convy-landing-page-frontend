import React from 'react';

const categories = [
  {
    name: "Soft Drinks",
    image: "/images/SoftDrinks.png",
    bg: "bg-white",
    hoverBg: "hover:bg-cyan-500",
    contentBg: "bg-white border border-gray-200",
    textColor: "text-gray-900",
    hoverText: "hover:text-white",
    border: "border border-gray-200",
    emojiBg: "bg-white",
  },
  {
    name: "Chicken Pizza",
    image: "/images/Pizza.png",
    bg: "bg-white",
    hoverBg: "hover:bg-cyan-500",
    contentBg: "bg-white border border-gray-200",
    textColor: "text-gray-900",
    hoverText: "hover:text-white",
    border: "border border-gray-200",
    emojiBg: "bg-red-100",
  },
  {
    name: "Desserts",
    image: "/images/Desserts.png",
    bg: "bg-white",
    hoverBg: "hover:bg-cyan-500",
    contentBg: "bg-white border border-gray-200",
    textColor: "text-gray-900",
    hoverText: "hover:text-white",
    border: "border border-gray-200",
    emojiBg: "bg-yellow-100",
  },
];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-cyan-500">Popular Categories</h2>
          <div className="flex space-x-4">
            <button className="bg-gray-100 text-cyan-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              ←
            </button>
            <button className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
              →
            </button>
          </div>
        </div>
        <p className="text-4xl font-bold text-black mb-8">
          From your favorite restaurants to
          <br />
          your doorstep!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="text-center transition-colors duration-200 flex justify-center"
            >
              <div
                className={
                  `w-72 rounded-2xl p-8 mb-4 border border-gray-200 bg-white transition-colors duration-200
          hover:bg-cyan-500 group`
                }
              >
                <div className="w-full flex items-center justify-center mb-4">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-44 h-44 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-200 group-hover:text-white">
                  {cat.name}
                </h3>
                <p className="text-gray-600 transition-colors duration-200 group-hover:text-white">
                  Order now &gt;
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-colors">
            View more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;