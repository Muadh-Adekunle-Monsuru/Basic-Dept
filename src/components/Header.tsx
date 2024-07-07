import { motion } from 'framer-motion';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import Logo from './Logo';

const underlineVariants = {
	hidden: {
		width: 0,
		transition: {
			duration: 0.3,
		},
	},
	visible: {
		width: '100%',
		transition: {
			duration: 0.3,
		},
	},
};

const navItems = ['Work', 'About', 'News', 'Thinking', 'Careers', 'Contact'];

export default function Header({ headerInView }: { headerInView: boolean }) {
	return (
		<div
			className={`fixed top-0 w-screen z-40 flex justify-between items-center p-6 px-4 lg:py-[48px] lg:px-20 uppercase antialiased text-sm font-SctoRegular ${
				headerInView ? 'text-white' : 'hidden'
			} `}
		>
			<div className='flex gap-[72px] w-full'>
				<Logo header={headerInView} />
				<div className='lg:flex justify-between w-[60%] hidden '>
					{navItems.map((item) => (
						<div key={item} className='w-full'>
							<motion.div
								variants={underlineVariants}
								initial='hidden'
								whileHover='visible'
								className='cursor-pointer inline-block relative w-full'
							>
								{item}
								<motion.div
									variants={underlineVariants}
									initial='hidden'
									animate='visible'
									className='absolute bottom-0 left-0 h-0.5 bg-black'
								/>
							</motion.div>
						</div>
					))}
				</div>
			</div>
			<div className='w-9 hidden lg:inline-block'>
				<EllipsisHorizontalIcon />
			</div>
			<div className='text-lg lg:hidden'>MENU</div>
		</div>
	);
}
