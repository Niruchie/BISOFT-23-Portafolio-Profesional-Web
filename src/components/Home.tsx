import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useWindowSize } from '@uidotdev/usehooks';

import { useNavigationContext } from './hooks/NavigationContext';
import { useLanguage } from '../i18n/i18n.config';
import ParallaxCard from './ParallaxCard';

import LGT from '../styles/resources/logo.svg';
import * as font from '../styles/webfonts/fonts.module.scss';
import * as b from '../styles/Home.module.scss';

const colors = new URL(
	'../styles/resources/colors.png?width=2048',
	import.meta.url,
);

export default function Home(): ReactElement {
	const lang = useLanguage();
	const { height } = useWindowSize();
	const { Home: refHome } = useNavigationContext();

	return (
		<ParallaxCard height={height} backgroundImage={colors.href} extraBgCss={[]}> 
			<Container fluid ref={refHome} className={['d-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'h-100', 'p-5', b['display']].join(' ')}>
				<Row className='d-flex flex-column justify-content-center align-items-center'>
					<Col className='d-flex justify-content-center align-items-center'>
						<figure className='rounded p-5'>
							<img src={LGT} alt='=' width={200} height={200} />
						</figure>
					</Col>
					<Col className='d-flex flex-column justify-content-start align-items-center'>
						<Row>
							<span className={['text-center', 'h2', font['mnc']].join(' ')}>
								<Trans i18nKey='fullstack' ns='Home' lang={lang} />
							</span>
						</Row>

						<Row>
							<span className={b['sub']}>
								<Trans i18nKey='proposals' ns='Home' lang={lang} />
							</span>
						</Row>
					</Col>
				</Row>
			</Container>
		</ParallaxCard>
	);
}