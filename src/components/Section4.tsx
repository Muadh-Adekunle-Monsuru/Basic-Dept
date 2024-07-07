import { useRef, useState, useEffect, MouseEvent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Scrollbar, FreeMode } from 'swiper/modules';
import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid';

interface Element {
	image: string;
	name: string;
	description: string;
}

const elements: Element[] = [
	{
		image:
			'https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&fm=webp&q=65',
		name: 'google',
		description:
			'Our embedded partnership with Google is as deep as it gets. We"re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here.',
	},
	{
		image:
			'https://cdn.sanity.io/images/8nn8fua5/production/09a68ec6d03469bfd5bbb9726a58225acb900ae2-128x42.svg?w=720&fm=webp&q=65',
		name: 'kfc',
		description:
			'An award-winning global, digital transformation engagement spanning eCommerce, mobile app,and new drive thru experiences. Bringing KFC"s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership here.',
	},
	{
		image:
			'https://cdn.sanity.io/images/8nn8fua5/production/fbb650ce74c1849cb4da2d9951fad89149494cc9-171x42.svg?w=720&fm=webp&q=65',
		name: 'wilson',
		description:
			'A reimagining of Wilsones brand visual identity,and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand"s 108-year history. Read our full case study here.',
	},
	{
		image:
			'https://cdn.sanity.io/images/8nn8fua5/production/b2624b2d49d9c14eec0cd30203c5eec0331eac42-42x42.svg?w=720&fm=webp&q=65',
		name: 'AT&T',
		description:
			'Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.',
	},
	{
		image:
			'https://cdn.sanity.io/images/8nn8fua5/production/8dd2f090726c8d5befeaa2924b44678e69452945-1024x200.svg?w=720&fm=webp&q=65',
		name: 'patagonia',
		description:
			'Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study here.',
	},
];

const Section4 = ({ inView }: { inView: boolean }) => {
	const cursor = useRef<HTMLDivElement>(null);
	const [pressed, setPressed] = useState(false);

	const changePosition = (e: MouseEvent) => {
		if (cursor.current) {
			cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
		}
	};

	const handleMouseDown = () => {
		if (cursor.current) {
			cursor.current.style.transform += ' scale(0.75)';
			setPressed(true);
			console.log(pressed);
		}
	};

	const handleMouseUp = () => {
		if (cursor.current) {
			cursor.current.style.transform = cursor.current.style.transform.replace(
				' scale(0.75)',
				''
			);
			setPressed(false);
		}
	};

	useEffect(() => {
		const specialComponent: any = document.querySelector('.special-component');
		if (specialComponent) {
			specialComponent.addEventListener('mousemove', changePosition);
			specialComponent.addEventListener('mousedown', handleMouseDown);
			specialComponent.addEventListener('mouseup', handleMouseUp);

			return () => {
				specialComponent.removeEventListener('mousemove', changePosition);
				specialComponent.removeEventListener('mousedown', handleMouseDown);
				specialComponent.removeEventListener('mouseup', handleMouseUp);
			};
		}
	}, []);

	return (
		<div
			className='special-component py-14 lg:px-20 px-5 relative cursor-none'
			onMouseMove={changePosition}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<style>{`
           .cursor-style {
                background-color: #f9cdcd;
                border-radius: 100%;
                transform-origin: 100% 100%;
                transform: translate(-50%, -50%);
                position: absolute;
                will-change: transform;
                transition: transform 0.1s ease-out;
                pointer-events: none;
                width: 5rem;
                height: 5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                font-size: 0.75rem;
                font-family: monospace;
                text-transform: uppercase;
                font-weight: bold;
}

			.swiper-scrollbar {
				background: ${inView ? 'rgba(251, 207, 232,0.1)' : 'rgba(0, 0, 0, 0.1)'};
			}

			.swiper-scrollbar-drag {
				background:  ${inView ? 'rgba(251, 207, 232,0.6)' : 'rgba(0, 0, 0, 0.5)'};
			}
 `}</style>
			<div className='cursor-style hidden lg:block' ref={cursor}>
				<div className='relative'>
					<ChevronDoubleLeftIcon className='w-8 absolute top-0  -left-16 text-[#f9cdcd]' />
					DRAG
					<ChevronDoubleRightIcon className='w-8 absolute top-0 -right-16 text-[#f9cdcd]' />
				</div>
			</div>
			<h1 className='text-[2.5rem] leading-none uppercase font-SctoMedium blur-[0.3px]'>
				Featured <br /> Engagements
			</h1>
			<Swiper
				modules={[Scrollbar, FreeMode]}
				slidesPerView='auto'
				scrollbar={{ draggable: true }}
				className='my-14'
				freeMode={true}
				spaceBetween={55}
			>
				{elements.map((item) => (
					<SwiperSlide key={item.name} style={{ width: '17rem' }}>
						<div
							className='w-72 pb-24 blur-[0.35px]'
							onMouseDown={() => console.log('hello')}
						>
							<div className='overflow-hidden py-14'>
								<img
									src={item.image}
									className='object-contain w-28 max-h-10'
									alt={item.name}
								/>
								<div className='w-5 bg-black h-[0.1rem] my-5' />
							</div>
							<div>
								<h1 className='text-2xl uppercase font-SctoMedium py-3'>
									{item.name}
								</h1>
								<p>{item.description}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Section4;
