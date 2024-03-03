import React, { useCallback, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { Trans } from 'react-i18next';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import {
	FaRegArrowAltCircleLeft,
	FaRegArrowAltCircleRight,
} from "react-icons/fa";

import { useNavigationContext } from '../hooks/NavigationContext';
import { useLanguage } from '../../i18n/i18n.config';
import ToolsCardFrontend from './Frontend';
import ToolsCardBackend from './Backend';
import ToolsCardDatabase from './Database';
import ToolsCardDCDev from './Other';

import * as font from '../../styles/webfonts/fonts.module.scss';

export default function Tools() {
	const lang = useLanguage();
	const { Tools: refTools } = useNavigationContext();
	const isXXLDevice = useMediaQuery("only screen and (min-width : 1590px)");

	const [current, setCurrent] = useState(0);
	const [cards] = useState([
		ToolsCardFrontend,
		ToolsCardBackend,
		ToolsCardDatabase,
		ToolsCardDCDev,
	]);

	const handleSelect = useCallback((isNext: boolean) => {
		if (isNext)
			setCurrent((prev) => prev === cards.length - 1 ? 0 : prev + 1);
		else
			setCurrent((prev) => prev === 0 ? cards.length - 1 : prev - 1);
	}, [cards.length]);

	return (
		<Container fluid 
			ref={refTools}
			className='m-0 p-0 g-0'
			style={{ height: '100vh' }}>
			<Container fluid className="p-5">
				<Row className="h1 text-center">
					<h1 className={font["mnc"]}>
						<Trans i18nKey="title" ns="Tools" lang={lang} />
					</h1>
				</Row>
				<Row className="text-center">
					<p><Trans i18nKey="description1" ns="Tools" lang={lang} /></p>
					<p><Trans i18nKey="description2" ns="Tools" lang={lang} /></p>
				</Row>
				<Row className="d-flex justify-content-center">
					{
						isXXLDevice && cards.map((card, index) => (
							<Col key={index} className='p-3'
								children={
									<Container as={card} cardClasses='shadow-lg rounded p-5' />
								} />
						))
					}
					{
						!isXXLDevice && [
							<Row sm={12} className=' d-flex justify-content-center align-items-stretch p-2'
								children={<Container as={cards[current]} cardClasses='shadow-lg rounded p-5' />} />,
							<div className='d-inline-flex justify-content-center align-items-center w-100 p-3'>
								<FaRegArrowAltCircleLeft size={32} className='me-5'
									onClick={() => handleSelect(false)} />
								<span
									children={cards.map((_, index) => (' ' + (index === current ? '●' : '○') + ' '))}
								/>
								<FaRegArrowAltCircleRight size={32} className='ms-5'
									onClick={() => handleSelect(true)} />
							</div>
						]
					}
				</Row>
			</Container>
		</Container>
	);
}