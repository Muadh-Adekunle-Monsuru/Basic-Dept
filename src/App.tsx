import { PlusCircleIcon } from '@heroicons/react/20/solid';
import { useInView } from 'react-intersection-observer';
import Jumbo from './components/Jumbo';
import HeavenScroll from 'react-heaven-scroll';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
	const { ref, inView } = useInView({
		threshold: 0.4, // Adjust the threshold as needed
	});
	const { ref: ref2, inView: headerInView } = useInView({
		threshold: 0.1, // Adjust the threshold as needed
	});
	return (
		<>
			<Header headerInView={headerInView} />
			<main
				className={`bg-noise bg-repeat font-SctoRegular selection:bg-black selection:text-white ${
					inView ? 'bg-[#252422] text-pink-200' : 'bg-[#f4f4f4]'
				}  transition duration-1000 `}
			>
				<div ref={ref2}>
					<Jumbo />
				</div>
				<Section2 />
				<div className='flex lg:px-20 px-5 items-center justify-center'>
					<div className=' border-b-2 border-black/70 w-full ' />
				</div>
				<Section3 />
				<div className='flex flex-col lg:px-20 px-5 items-center justify-center'>
					<div className=' border-b-2 border-black/70 w-full ' />
					<div className='flex justify-between w-full py-5 select-none blur-[0.35px] text-sm'>
						<p className='w-1/4 '>00</p>
						<p className='w-1/2'>/05</p>
						<p>
							<PlusCircleIcon className='w-3 bg-black rounded-full' />
						</p>
					</div>
				</div>
				<Section4 inView={inView} />
				<div ref={ref}>
					<Section5 />
				</div>
				<Section6 />
				<Footer />
			</main>
		</>
	);
}

export default App;
