import React, { useMemo } from 'react';

interface ParallaxCardProps {
	backgroundImage: string;
	height?: string | number;
	extraBgCss?: Array<string>;
	children?: React.ReactNode;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({ backgroundImage, height, extraBgCss, children }) => {
	const [offset, setOffset] = React.useState(0);

	React.useEffect(() => {
		function handleScroll() {
			setOffset(window.scrollY);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const backgroundImageProperty = useMemo(() => {
		return [
			'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
			...(extraBgCss || []),
			`url(${backgroundImage})`,
		].join(', ');
	}, [backgroundImage, extraBgCss]);
		
		

	return (
		<div
			style={{
				height: height || '200px',
				width: '100%',
				backgroundPositionY: offset * 0.002, // This will make the parallax effect smoother
				backgroundImage: backgroundImageProperty,
				backgroundSize: 'cover',
				backgroundAttachment: 'fixed',
			}}
		>
			{children}
		</div>
	);
};

export default ParallaxCard;