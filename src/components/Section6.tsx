import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Section6() {
	const entries = [
		{
			image:
				'https://cdn.sanity.io/images/8nn8fua5/production/e1ee6f1258bdc530b8843f97029f804856f72d61-2000x1468.jpg?w=720&fm=webp&q=65',
			text: "THE FUTURE OF FASHION AND AI AT GLOSSY'S ECOMMERCE SUMMIT",
			press: '4.55.32',
		},
		{
			image:
				'https://cdn.sanity.io/images/8nn8fua5/production/298d81bc795f2c46b55b8ca779d7c446326aeccd-1107x734.png?w=720&fm=webp&q=65',
			text: "RETAIL'S NEW PLAYGROUND: WHERE PHYSICAL MEETS DIGITAL",
			press: '3.55.32',
		},
		{
			image:
				'https://cdn.sanity.io/images/8nn8fua5/production/1f72d719b320cc973839fabfd6cff390d3aac1c4-1000x734.jpg?w=720&fm=webp&q=65',
			text: 'GEN ALPHA, THE BETA TEST FOR HOW BRANDS CAN REACH A NEW GENERATION',
			press: '4.28.32',
		},
		{
			image:
				'https://cdn.sanity.io/images/8nn8fua5/production/1e04aa777778cf8bd2395e66ee1e8b4d9b2e94a6-870x544.png?w=720&fm=webp&q=65',
			text: 'NEW PROJECTS ON THE PODIUM FOR THE 28TH WEBBY AWARDS',
			press: '9.38.32',
		},
		{
			image:
				'https://cdn.sanity.io/images/8nn8fua5/production/8063a6f5ea9626cf98e092b801987075cf7fbe75-1000x734.jpg?w=720&fm=webp&q=65',
			text: 'WHAT SOFIA COPPOLA CAN TEACH US ABOUT SHIFTING CULTURE',
			press: '19.8.32',
		},
		{
			image:
				'https://cdn.sanity.io/images/8nn8fua5/production/289c0ed79c95e098d09f508e3fc1aa86c241e878-870x544.png?w=720&fm=webp&q=65',
			text: 'THE 28TH ANNUAL WEBBY AWARDS NODS ARE IN',
			press: '4.8.32',
		},
	];
	return (
		<div className='py-14 lg:px-20 px-5 '>
			<div className='flex justify-between items-center'>
				<h1 className='text-2xl lg:text-[2.5rem] leading-none uppercase font-SctoMedium blur-[0.3px]'>
					Featured <br />
					News
				</h1>
				<span className='select-none cursor-pointer hover:bg-gradient-to-t hover:from-black hover:to-black duration-700 hover:text-white my-10 inline-block px-7 p-2 border border-black-200 rounded-2xl uppercase text-xs font-SctoMedium'>
					View All
				</span>
			</div>
			<div className='flex flex-col lg:gap-10 py-2 lg:py-10'>
				{entries.map((news) => (
					<div
						className='flex flex-col lg:flex-row gap-5 border-t border-black py-3 lg:py-8 group cursor-pointer'
						key={news.text}
					>
						<div className='lg:w-1/3 flex-grow h-56 md:h-auto overflow-hidden'>
							<img
								src={news.image}
								className='w-full h-full object-cover scale-110 group-hover:scale-105 transition-all duration-300 ease-in-out'
							/>
						</div>
						<div className='lg:w-3/4 flex flex-col justify-between gap-10 blur-[0.3px]'>
							<div className='flexjustify-between items-start'>
								<h2 className='text-xl lg:text-4xl lg:w-3/4 group-hover:underline'>
									{news.text}
								</h2>
								<div className='hidden w-20 overflow-hidden lg:flex'>
									<ArrowRightIcon className='w-10 -translate-x-10 group-hover:translate-x-10 transition-all duration-300' />
									<ArrowRightIcon className='w-10 group-hover:translate-x-28 transition-all duration-300' />
								</div>
							</div>
							<div className='flex justify-between items-center'>
								<p className='text-xs py-3'>PRESS {news.press}</p>
								<ArrowRightIcon className='w-7 group-hover:w-6 transition-all duration-300' />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
