import LogoShort from './LogoShort';

export default function Section3() {
	const entries = [
		{
			image: '/section3_1.jpg',
			title: 'patagonia',
			description:
				'AN ECOMMERCE EXPERIENCE DRIVEN BY PATAGONIA"S BRAND MISSION',
		},
		{
			image: '/section3_2.jpg',
			title: 'wilson',
			description: 'A CENTURY-OLD SPORTS BRAND FINDING ITS PLACE IN CULTURE',
		},
		{
			image: '/laptop.gif',
			title: 'Google store',
			description:
				'AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE ACROSS THE GLOBE',
		},
	];
	return (
		<div className='py-20 lg:px-20 px-5'>
			<div className='flex flex-col lg:flex-row justify-between '>
				<div className='w-full lg:w-1/2'>
					<h1 className='text-xl lg:text-4xl leading-none font-SctoRegular font-bold subpixel-antialiased blur-[0.4px]'>
						BASIC/DEPT® is a global branding and digital design agency building
						products, services, and eCommerce experiences that turn cultural
						values into company value.
					</h1>
					<span className='my-10 inline-block px-7 p-2 border border-black rounded-2xl uppercase text-xs font-SctoMedium'>
						See the work
					</span>
				</div>
				<div className='py-4 lg:w-1/2 pl-32 lg:pl-20'>
					<LogoShort />
				</div>
			</div>
			<div className='py-5 overflow-x-scroll lg:overflow-auto'>
				<div className='grid grid-cols-3 gap-5 w-[230vw] lg:w-full '>
					{entries.map((item) => (
						<div
							key={item.title}
							className='group hover:cursor-pointer w-72 lg:w-auto'
						>
							<div className='overflow-hidden h-96 lg:h-auto lg:w-auto'>
								<img
									src={item.image}
									className='h-full w-full object-cover scale-110 transform  group-hover:scale-105 transition-transform duration-300'
								/>
							</div>
							<div className='uppercase py-3'>
								<h2 className='font-SctoMedium py-2 text-xl group-hover:underline transition-all duration-300'>
									{item.title}
								</h2>
								<p className='w-1/2 text-xs lg:text-sm font-semibold text-black/85 select-none blur-[0.3px]'>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
