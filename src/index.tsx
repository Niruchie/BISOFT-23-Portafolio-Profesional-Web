import { createRoot } from 'react-dom/client';
import { ReactElement, StrictMode } from 'react';
import { ParallaxImage } from 'react-nice-scroll';

import NavigationProvider from './components/hooks/NavigationContext';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Tools from './components/Tools';
import Home from './components/Home';

import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-nice-scroll/dist/styles.css";
import './i18n/i18n.config';

const colors = new URL(
	'./styles/resources/colors.png?width=2048',
	import.meta.url,
);

const threehundreds = new URL(
	'./styles/resources/threehundreds.png?width=2048',
	import.meta.url,
);

const lighthand = new URL(
	'./styles/resources/lighthand.png?width=2048',
	import.meta.url,
);

function App(): ReactElement {
	return (
		<NavigationProvider>
			<Navigation />
			<Home />
			<ParallaxImage
				src={colors.href}
				containerHeight='200px' />
			<Profile />
			<ParallaxImage
				src={threehundreds.href}
				containerHeight='200px' />
			<Tools />
			<ParallaxImage
				src={lighthand.href}
				containerHeight='200px' />
			<Footer />
		</NavigationProvider>
	);
}

createRoot(document.getElementById('root')!)
	.render(<StrictMode><App /></StrictMode>);
