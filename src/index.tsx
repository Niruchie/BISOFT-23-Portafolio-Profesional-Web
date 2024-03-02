import React, { Fragment, StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { useMediaQuery, useWindowSize } from '@uidotdev/usehooks';
import Container from 'react-bootstrap/Container';

import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Tools from './components/Tools';
import Home from './components/Home';

import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n/i18n.config';

function App() {
	const isMediumDevice = useMediaQuery("only screen and (min-width : 992px)");

	const contentSize = useMemo(() => {
		if (isMediumDevice)
			// ? Bootstrap 5: Navbar expand breakpoint
			return ({ "minHeight": 'calc(100vh - 80px)' });
		else
			// ? Bootstrap 5: Navbar collapse breakpoint
			return ({ "minHeight": 'calc(100vh - 56px)' });
	}, [isMediumDevice]);

	return (
		<Container fluid className='m-0 p-0 g-0'
			style={{ height: '100vh', width: '100vw' }}>
			<Navigation />
			<div style={{ height: isMediumDevice ? '80px' : '55px' }} />
			<Home />
			<Profile />
			<Tools />
			<Footer />
		</Container>
	);
}

createRoot(document.getElementById('root')!)
	.render(<StrictMode children={<App />} />);
