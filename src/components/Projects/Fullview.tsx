import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Splide, SplideSlide } from '@splidejs/react-splide';

interface Properties {
	slide: number;
	images: string[];
	unshow: () => void;
}

export default function Fullview({ images, unshow, slide }: Properties) {
	const [splide, setSplide] = useState<HTMLDivElement | null>(null);
	const options = {
		start: slide,
		rewind: true,
		type: 'fade',
	};

	const app = (
		<Container fluid className='d-flex flex-column justify-content-center align-items-center h-100 w-100'>
			<div className='d-flex justify-content-center align-items-center h-100 w-100' style={{ position: 'relative' }}>
				<Splide options={options}>
					{
						images
							.map((image, index) => (
								<SplideSlide key={index}>
									<Container className='p-5'>
										<img src={image} width='100%' />
									</Container>
								</SplideSlide>
							))
					}
				</Splide>
			</div>
			<div className='d-flex justify-content-center align-items-center text-white p-5' style={{ userSelect: 'none' }} onClick={unshow}>
				<IoCloseCircleOutline className='me-2'/>
				<span>Click here to close</span>
			</div>
		</Container>
	);

	useEffect(() => {
		const splide = document
			.createElement('div');

		splide.style.left = '0';
		splide.style.bottom = '0';
		splide.style.width = '100vw';
		splide.style.height = '100vh';
		splide.style.zIndex = '50000';
		splide.style.position = 'fixed';
		splide.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';

		document.body
			.appendChild(splide);

		setSplide(splide);

		return () => {
			document.body
				.removeChild(splide);
		};
	}, []);

	try {
		if (splide === null) return null;
		return createPortal(app, splide);
	}
	catch (error) {
		console.error(error);
		return null;
	}
}