import { useState } from 'react';
import ReactPlayer from 'react-player';
import Cursor from './Cursor';

const VideoPlayer = () => {
	const [playing, setPlaying] = useState(false);
	return (
		<div className='relative'>
			<style>
				{`
				.react-player > video{
					 position: absolute;
  					 object-fit: cover;
				}`}
			</style>
			<Cursor />
			<div className=''>
				<div
					className='jumbo bg-black relative  cursor-none object-cover '
					style={{}}
				>
					<ReactPlayer
						url='https://res.cloudinary.com/dzrkcnt5h/video/upload/v1720219523/uploads/karppzb5xpybklig2kwy.mp4'
						className='react-player absolute top-0 left-0 object-fill'
						width='100%'
						height='100%'
						playing={playing}
						controls={false}
						light={
							<img
								src='/trimmed.gif'
								className='cursor-none w-full h-full object-cover'
								alt='Thumbnail'
							/>
						}
						onClick={() => setPlaying((prev) => !prev)}
						style={{
							objectFit: 'fill',
						}}
						playIcon={
							<div className={`absolute  flex bg-white rounded-full md:hidden`}>
								<div className='relative w-24 h-24  flex flex-col justify-center items-center uppercase text-sm'>
									<span className='block font-semibold'>Watch </span>
									<span className='block font-semibold'>Reel</span>
									<div className='p-1 absolute -bottom-14 text-white text-center'>
										<p>BASIC/DEPT®</p>
										<p>2010 -∞</p>
									</div>
								</div>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
