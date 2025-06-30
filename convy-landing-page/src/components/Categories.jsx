import React from 'react';

const categories = [
	{
		name: 'Soft Drinks',
		image: '/images/SoftDrinks.png',
		bg: 'bg-white',
		hoverBg: 'hover:bg-cyan-500',
		contentBg: 'bg-white border border-gray-200',
		textColor: 'text-gray-900',
		hoverText: 'hover:text-white',
		border: 'border border-gray-200',
	},
	{
		name: 'Chicken Pizza',
		image: '/images/Pizza.png',
		bg: 'bg-white',
		hoverBg: 'hover:bg-cyan-500',
		contentBg: 'bg-white border border-gray-200',
		textColor: 'text-gray-900',
		hoverText: 'hover:text-white',
		border: 'border border-gray-200',
	},
	{
		name: 'Desserts',
		image: '/images/Desserts.png',
		bg: 'bg-white',
		hoverBg: 'hover:bg-cyan-500',
		contentBg: 'bg-white border border-gray-200',
		textColor: 'text-gray-900',
		hoverText: 'hover:text-white',
		border: 'border border-gray-200',
	},
];

const Categories = () => {
	return (
		<section className="py-[45px]">
			<div className="max-w-[1242.55px] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center mb-[27px]">
					<h2 className="w-[350px] h-[54px] font-['Poppins'] font-medium text-[36px] leading-snug tracking-[0%] text-[#00B0C8] -ml-[55px]">
						Popular Categories
					</h2>
					<div className="flex space-x-4 mr-[-35px]">
						<button className="bg-[#D9D9D942] w-[71.15px] h-[71.15px] rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
							<img src="/images/icons/backwardArrow.png" className="w-[30px] h-[30px]"/>
						</button>
						<button className="bg-[#00B0C8] w-[71.15px] h-[71.15px] rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors">
							<img src="/images/icons/forwardArrow.png" className="w-[30px] h-[30px]"/>
						</button>
					</div>
				</div>
				<p className="w-[698px] h-[120px] font-['Poppins'] font-bold text-[40px] leading-snug tracking-[0%] text-[#333333] mb-8 ml-[-55px]">
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
								className=" w-[348px] h-[402px] rounded-[18px] border border-[#00000033] p-8 mb-4 bg-white transition-colors duration-200 hover:bg-[#00B0C8] group flex flex-col justify-start">
								<div className="w-full flex items-center justify-center mb-4">
									<img src={cat.image} className="w-[217px] h-[207px] object-contain" />
								</div>
								<h3 className={`w-[138px] h-[39px] font-['Poppins'] font-medium text-[26px] leading-snug tracking-[0%] text-[#333333] transition-colors duration-200 group-hover:text-white whitespace-nowrap flex flex-col justify-end mt-[34px] py-[11px]
              ${cat.name === 'Chicken Pizza' ? 'ml-10' : 'mx-auto'}`}> {cat.name}
                  				</h3>
			<p className={`w-[150px] h-[33px] font-['Poppins'] font-normal text-[22px] leading-[100%] tracking-[0%] text-[#333333] flex items-center mx-auto transition-colors duration-200 group-hover:text-white ${cat.name === 'Chicken Pizza' ? 'ml-16' : ''} `}>
            Order Now
            <span className="ml-2 flex items-center">
              <img
                src="/images/icons/gt-black.png" alt=">" className="group-hover:hidden inline w-[10.58px] h-[14.29px] ml-[5px]" />
              <img
                src="/images/icons/gt.png" alt=">" className="hidden group-hover:inline w-[10.58px] h-[14.29px] ml-[5px]" />
            </span>
          </p>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-4">
					<button className="bg-[#00B0C8] w-[295px] h-[80px] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center mx-auto">
						<span className="font-['Poppins'] font-semibold text-[26px] text-white w-full text-center">
							See more
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Categories;