import AutoPlayVideo from './AutoPlay';

export default function Section5() {
	return (
		<div className={`py-14 lg:px-20 px-5 flex flex-col md:flex-row gap-10`}>
			<div className='md:w-1/2 w-full order-2 md:order-1'>
				<h1 className='text-4xl md:text-7xl font-SctoMedium '>
					BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE
				</h1>
				<p className='py-2'>
					ADWEEK <span className='font-SctoMedium'>AGENCY SPOTLIGHT</span>
				</p>
				<span className='my-10 inline-block px-7 p-2 border border-pink-200 rounded-2xl uppercase text-xs font-SctoMedium'>
					About Us
				</span>
			</div>
			<div className='md:w-1/2 w-full max-h-screen order-1 md:order-2'>
				<AutoPlayVideo videoSrc='/section5.mp4' />
			</div>
		</div>
	);
}
