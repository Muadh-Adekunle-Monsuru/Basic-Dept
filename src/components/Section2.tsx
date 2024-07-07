import Adage from './Adage';
import Campaign from './Campaign';
import WebyAwards from './WebyAwards';

const items = [
	{
		component: <Adage />,
		description: 'Design and branding agency of the year',
	},
	{
		component: <WebyAwards />,
		description: 'Agency of the year',
	},
	{
		component: <Campaign />,
		description: 'Digital innovation agency of the year finalist',
	},
];
export default function Section2() {
	return (
		<div className='relative  py-10  lg:mt-20 w-full lg:px-20 lg:py-40 px-5'>
			<div className='grid grid-cols-3 gap-5 justify-items-center content-center items-center justify-between'>
				{items.map((item) => (
					<div
						className='h-52 flex flex-col items-center justify-start  uppercase hover:cursor-pointer group overflow-hidden'
						key={item.description}
					>
						<div className='lg:w-36 w-20 h-32 text-center grid items-center transform  transition-transform ease-in-out duration-150 group-hover:scale-110'>
							{item.component}
						</div>
						<div className=' text-center text-[0.6rem] md:text-sm md:w-3/4 group-hover:underline blur-[0.3px]'>
							{item.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
