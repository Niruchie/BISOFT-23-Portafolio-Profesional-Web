import { createRoot } from 'react-dom/client';
import { ReactElement, StrictMode } from 'react';

import NavigationProvider from './components/hooks/NavigationContext';
import ParallaxCard from './components/ParallaxCard';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Tools from './components/Tools';
import Home from './components/Home';

import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@splidejs/react-splide/dist/css/splide.min.css';

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

const abstractshapes = new URL(
	'./styles/resources/abstractshapes.webp?width=2048',
	import.meta.url,
);

function App(): ReactElement {
	return (
			<NavigationProvider>
				<Navigation />
				<Home />
				<ParallaxCard
					backgroundImage={colors.href} />
				<Profile />
				<ParallaxCard
					backgroundImage={threehundreds.href} />
				<Tools />
				<ParallaxCard
					backgroundImage={lighthand.href} />
				<Projects />
				<ParallaxCard
					backgroundImage={abstractshapes.href} />
				<Footer />
			</NavigationProvider>
	);
}

createRoot(document.getElementById('root')!)
	.render(<StrictMode><App /></StrictMode>);
