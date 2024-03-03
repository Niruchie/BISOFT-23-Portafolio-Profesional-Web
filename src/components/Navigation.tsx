import { Fragment, useCallback, useMemo, useState } from 'react';
import { Trans, getI18n } from 'react-i18next';

import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { useMediaQuery } from '@uidotdev/usehooks';
import { AiOutlineMessage } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import {
	IoHomeOutline,
	IoSettingsOutline,
	IoGitBranchOutline,
	IoExtensionPuzzleOutline,
	IoCodeOutline,
} from 'react-icons/io5';


import { useNavigationContext } from './hooks/NavigationContext';
import { useLanguage } from '../i18n/i18n.config';
import * as b from '../styles/Navigation.module.scss';

export default function Navigation() {
	const lang = useLanguage();
	const redirectors = useNavigationContext()
	const isMediumDevice = useMediaQuery("only screen and (min-width : 992px)");

	
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
		[lang],
	);

	const sections = useCallback(() => [
		{
			name: <Trans i18nKey="settings" ns='Navigation' lang={lang} />,
			icon: <IoSettingsOutline size={32} />,
			href: '#settings',
			finished: false,
		},
		{
			
			name: <Trans i18nKey="home" ns='Navigation' lang={lang} />,
			icon: <IoHomeOutline size={32} />,
			href: redirectors.Home,
			finished: true,
		},
		{
			name: <Trans i18nKey="profile" ns='Navigation' lang={lang} />,
			icon: <ImProfile size={32} />,
			href: redirectors.Profile,
			finished: true,
		},
		{
			name: <Trans i18nKey="studies" ns='Navigation' lang={lang} />,
			icon: <IoGitBranchOutline size={32} />,
			href: '#studies',
			finished: false,
		},
		{
			name: <Trans i18nKey="tools" ns='Navigation' lang={lang} />,
			icon: <IoExtensionPuzzleOutline size={32} />,
			href: redirectors.Tools,
			finished: true,
		},
		{
			name: <Trans i18nKey="projects" ns='Navigation' lang={lang} />,
			icon: <IoCodeOutline size={32} />,
			href: '#projects',
			finished: false,
		},
		{
			name: <Trans i18nKey="contact" ns='Navigation' lang={lang} />,
			icon: <AiOutlineMessage size={32} />,
			href: redirectors.Footer,
			finished: true,
		},
	], [lang]);

	const options = useCallback(() => [
		{ value: 'es', label: <Trans i18nKey="spanish" ns='Navigation' lang={lang} /> },
		{ value: 'en', label: <Trans i18nKey="english" ns='Navigation' lang={lang} /> },
	], [lang]);

	return (
		<Navbar collapseOnSelect sticky='top'
			variant="dark" expand="lg"
			className={b['nav-bar']}>
			<Container fluid>
				<Navbar.Toggle aria-controls="r-nav" />
				<Navbar.Collapse id="r-nav">
					<Nav className="me-auto">
						{
							sections()
								.map((section, index) => (
									<OverlayTrigger
										key={index}
										placement="bottom"
										overlay={
											isMediumDevice
											? <Tooltip children={section.name}
												className={b["noclass"]
													.concat(
														'',
														' h3 ',
													)
												}
											/>
											: <Fragment />
										}
									>
										<Nav.Link
											data-active={index === 0}
											onClick={() => {
												if (typeof section.href !== 'string') {
													if (section.href.current) {
														window.scrollTo({
															top: section.href.current.offsetTop - contentSize,
															behavior: 'smooth'
														});
													}
												}
											}}
											className={b['nav-item'].concat(
												" ",
												'p-3 d-flex justify-md-content-center align-items-center'
											)}
										>
											{
												isMediumDevice && section.icon
													|| (
														<Fragment>
															<span className="me-2" children={section.icon} />
															{section.name}
														</Fragment>
													)
											}
										</Nav.Link>
									</OverlayTrigger>
								))
						}
					</Nav>
					<Form className="d-flex">
						<Form.Select onChange={(e) => setLanguage(e.target.value)} 
							children={
								options()
									.map((option, index) => (
										<option children={option.label}
											value={option.value}
											key={index}
										/>
									))
							}
							aria-label="Language"
							className="me-2" />
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};