import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMediaQuery, useWindowScroll } from '@uidotdev/usehooks';
import { Trans, getI18n } from 'react-i18next';

import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import {
	IoHomeOutline,
	// IoGitBranchOutline,
	IoExtensionPuzzleOutline,
	IoCodeOutline,
} from 'react-icons/io5';


import { useNavigationContext } from './hooks/NavigationContext';
import { useLanguage } from '../i18n/i18n.config';
import * as b from '../styles/Navigation.module.scss';
import { createPortal } from 'react-dom';

export default function Navigation() {
	const lang = useLanguage();
	const [{ x, y }] = useWindowScroll();
	const redirectors = useNavigationContext();
	const isMediumDevice = useMediaQuery('only screen and (min-width : 992px)');

	console.log('Window:', x, y);
	
	const [scroller, setScroller] = useState<HTMLDivElement | null>(null);
	const close = useRef<HTMLButtonElement>(null);

	const contentSize = useMemo(() => {
		if (isMediumDevice)
			// ? Bootstrap 5: Navbar expand breakpoint
			return 80;
		else
			// ? Bootstrap 5: Navbar collapse breakpoint
			return 55;
	}, [isMediumDevice]);

	const setLanguage = useCallback(
		(lang: string) => getI18n()
			.changeLanguage(lang),
		[],
	);

	const sections = useCallback(() => [
		// {
		// 	name: <Trans i18nKey='settings' ns='Navigation' lang={lang} />,
		// 	icon: <IoSettingsOutline size={32} />,
		// 	href: null,
		// 	finished: false,
		// },
		{
			name: <Trans i18nKey='home' ns='Navigation' lang={lang} />,
			icon: <IoHomeOutline size={32} />,
			href: redirectors.Home,
			finished: true,
		},
		{
			name: <Trans i18nKey='profile' ns='Navigation' lang={lang} />,
			icon: <ImProfile size={32} />,
			href: redirectors.Profile,
			finished: true,
		},
		// {
		// 	name: <Trans i18nKey='studies' ns='Navigation' lang={lang} />,
		// 	icon: <IoGitBranchOutline size={32} />,
		// 	href: null,
		// 	finished: false,
		// },
		{
			name: <Trans i18nKey='tools' ns='Navigation' lang={lang} />,
			icon: <IoExtensionPuzzleOutline size={32} />,
			href: redirectors.Tools,
			finished: true,
		},
		{
			name: <Trans i18nKey='projects' ns='Navigation' lang={lang} />,
			icon: <IoCodeOutline size={32} />,
			href: redirectors.Projects,
			finished: true,
		},
		{
			name: <Trans i18nKey='contact' ns='Navigation' lang={lang} />,
			icon: <AiOutlineMessage size={32} />,
			href: redirectors.Footer,
			finished: true,
		},
	], [lang, redirectors.Footer, redirectors.Home, redirectors.Profile, redirectors.Projects, redirectors.Tools]);

	const options = useCallback(() => [
		{ value: 'es', label: <Trans i18nKey='spanish' ns='Navigation' lang={lang} /> },
		{ value: 'en', label: <Trans i18nKey='english' ns='Navigation' lang={lang} /> },
	], [lang]);

	const scrollTop = useMemo(() => (
		<div className={b['scroller']}>
			<FaRegArrowAltCircleUp size={40} className='text-white'
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
		</div>
	), []);

	useEffect(() => {
		const toaster = document
			.createElement('div');

		toaster.style.left = '0';
		toaster.style.bottom = '0';
		toaster.style.width = '100vw';
		toaster.style.height = '100vh';
		toaster.style.zIndex = '50000';
		toaster.style.position = 'fixed';
		toaster.style.pointerEvents = 'none';
		toaster.style.backgroundColor = 'transparent';

		document.body
			.appendChild(toaster);

		setScroller(toaster);

		return () => {
			document.body
				.removeChild(toaster);
		};
	}, []);

	return (
		<Navbar collapseOnSelect ref={redirectors.Navigation.ref} fixed='top' variant='dark' expand='lg' className={b['nav-bar']}>
			<Container fluid>
				<Navbar.Toggle aria-controls='r-nav' ref={close} />
				<Navbar.Collapse id='r-nav'>
					<Nav className='me-auto'>
						{
							sections()
								.map((section, index) => (
									<OverlayTrigger
										key={index}
										placement='bottom'
										overlay={
											isMediumDevice
												? <Tooltip
													className={b['noclass']
														.concat(
															'',
															' h3 ',
														)
													}
												> {section.name} </Tooltip>
												: <Fragment />
										}
									>
										<Nav.Link
											data-active={section?.href?.current?.offsetTop < (1 + y + contentSize)}
											onClick={() => {
												if (!isMediumDevice)
													if (close.current)
														close.current.click();

												if (section.href) {
													if (section.href?.current === redirectors.Home.current) {
														window.scrollTo({
															behavior: 'smooth',
															top: 0,
														});
													}
													else if (section.href.current) {
														window.scrollTo({
															top: section.href.current.offsetTop - contentSize,
															behavior: 'smooth',
														});
													}
												}
											}}
											className={b['nav-item'].concat(
												' ',
												'p-3 d-flex justify-md-content-center align-items-center'
											)}
										>
											{
												isMediumDevice && section.icon
												|| (
													<Fragment>
														<span className='me-2'>
															{section.icon}
														</span>
														{section.name}
													</Fragment>
												)
											}
										</Nav.Link>
									</OverlayTrigger>
								))
						}
					</Nav>
					<Form className='d-flex'>
						<Form.Select onChange={(e) => setLanguage(e.target.value)}
							aria-label='Language'
							className='me-2'>
							{
								options()
									.map((option, index) => (
										<option value={option.value} key={index}>
											{option.label}
										</option>
									))
							}
						</Form.Select>
					</Form>
				</Navbar.Collapse>
			</Container>
			{scroller 
				&& (1 + y + contentSize) > redirectors.Home.current?.offsetHeight
				&& createPortal(scrollTop, scroller)}
		</Navbar>
	);
}