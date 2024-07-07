import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';

const AutoPlayVideo = ({ videoSrc }: { videoSrc: string }) => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Play only once when the video comes into view
		threshold: 0.5, // Adjust the threshold as needed
	});

	return (
		<div
			ref={ref}
			style={{
				width: '100%',
				height: '100%',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{inView && (
				<ReactPlayer
					url={videoSrc}
					playing={true}
					controls={false}
					width='100%'
					height='100%'
					loop
				/>
			)}
		</div>
	);
};

export default AutoPlayVideo;
