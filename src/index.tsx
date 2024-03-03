import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


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

const image = new URL(
	'./styles/resources/colors.png?width=2048',
	import.meta.url,
);

function App() {

	return (
		<NavigationProvider>
			<Navigation />
			<Home />
			<Profile />
			<Tools />
			<Footer />
		</NavigationProvider>
	);
}

createRoot(document.getElementById('root')!)
	.render(<StrictMode children={<App />} />);
