import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { useWindowSize } from '@uidotdev/usehooks';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { useNavigationContext } from '../hooks/NavigationContext';
import { useLanguage } from '../../i18n/i18n.config';
import PowerAppsProject from './PowerApps';
import DynamicProject from './Dynamic';

import * as font from '../../styles/webfonts/fonts.module.scss';
import VortexProject from './Vortex';

export default function Projects(): ReactElement {
	const lang = useLanguage();
	const { width, height } = useWindowSize();
	const { Projects: refProjects } = useNavigationContext();

	const options = {
		rewind: true,
		gap: '1rem',
		width,
	};

	return (
		<Container fluid className='m-0 p-0 g-0' style={{ minHeight: height }} ref={refProjects}>
			<Row className='text-center w-100 p-5'>
				<span className={['h1', font['mnc']].join(' ')}>
					<Trans i18nKey='title' ns='Projects' lang={lang} />
				</span>
			</Row>

			<div className='text-center'>
				<p className='p-0 m-0 g-0'><Trans i18nKey='description1' ns='Projects' lang={lang} /></p>
				<p className='px-5 m-0 g-0'><Trans i18nKey='description2' ns='Projects' lang={lang} /></p>
			</div>

			<Splide options={options}>
				<SplideSlide className='p-5'>
					<DynamicProject />
				</SplideSlide>
				<SplideSlide className='p-5'>
					<PowerAppsProject />
				</SplideSlide>
				<SplideSlide className='p-5'>
					<VortexProject />
				</SplideSlide>
			</Splide>
		</Container>
	);
}

Projects;