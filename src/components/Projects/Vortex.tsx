import { Trans } from 'react-i18next';
import { useMediaQuery } from '@uidotdev/usehooks';
import { ReactElement, useCallback, useMemo, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SiCsharp, SiJson, SiTile, SiUnity } from 'react-icons/si';

import { useLanguage } from '../../i18n/i18n.config';
import Fullview from './Fullview';

import * as b from '../../styles/Projects.module.scss';

const Vortex1 = new URL(
	'../../styles/resources/projects/vortex/vortex-1.png?width=1366',
	import.meta.url,
);

const Vortex2 = new URL(
	'../../styles/resources/projects/vortex/vortex-2.png?width=1366',
	import.meta.url,
);

const Vortex3 = new URL(
	'../../styles/resources/projects/vortex/vortex-3.png?width=1366',
	import.meta.url,
);

const Vortex4 = new URL(
	'../../styles/resources/projects/vortex/vortex-4.png?width=1366',
	import.meta.url,
);

const Vortex5 = new URL(
	'../../styles/resources/projects/vortex/vortex-5.png?width=1366',
	import.meta.url,
);

const Vortex6 = new URL(
	'../../styles/resources/projects/vortex/vortex-6.png?width=1366',
	import.meta.url,
);

export default function VortexProject(): ReactElement {
	const lang = useLanguage();
	const [slide, setSlide] = useState<number>(0);
	const [show, setShow] = useState<boolean>(false);
	const isLargerDevice = useMediaQuery('(min-width: 992px)');

	const open = useCallback((slide: number) => {
		setSlide(slide);
		setShow(true);
	}, []);

	const images = useMemo(() => [
		<Row key='asesores' className={isLargerDevice ? 'mb-3' : 'mt-3'}>
			<Col>
				<img className='rounded border'
					data-aos='flip-up'
					src={Vortex2.href} width='100%'
					onClick={() => open(1)} />
			</Col>
			<Col>
				<img className='rounded border'
					data-aos='flip-up'
					src={Vortex3.href} width='100%'
					onClick={() => open(2)} />
			</Col>
			<Col>
				<img className='rounded border'
					data-aos='flip-up'
					src={Vortex4.href} width='100%'
					onClick={() => open(3)} />
			</Col>
			<Col>
				<img className='rounded border'
					data-aos='flip-up'
					src={Vortex5.href} width='100%'
					onClick={() => open(4)} />
			</Col>
			<Col>
				<img className='rounded border'
					data-aos='flip-up'
					src={Vortex6.href} width='100%'
					onClick={() => open(5)} />
			</Col>
		</Row>
	], [isLargerDevice, open]);

	return (
		<Container>
			<Row>
				<div className={['h2', 'mb-3', b['mnc']].join(' ')}>
					<Trans i18nKey='application' ns='Projects.Vortex' lang={lang} />
				</div>
			</Row>
			<Row>
				<Col className='p-2' lg='6'>
					<img className={['rounded', b['border']].join(' ')} data-aos='zoom-in-down'
						src={Vortex1.href} width='100%' onClick={() => open(0)} />

					{!isLargerDevice && images}
				</Col>
				<Col className='p-2' lg='6'>
					{isLargerDevice && images}
					<hr />
					<div className='d-flex flex-row justify-content-start align-items-center flex-wrap'>
						<div data-aos='fade-left' className={['text-white', 'badge', 'me-2', b['badge']].join(' ')}>
							<SiJson className='me-2' />
							<Trans i18nKey='json' ns='Projects.Vortex' lang={lang} />
						</div>
						<div data-aos='fade-left' className={['text-white', 'badge', 'me-2', b['badge']].join(' ')}>
							<SiCsharp className='me-2' />
							<Trans i18nKey='csharp' ns='Projects.Vortex' lang={lang} />
						</div>
						<div data-aos='fade-left' className={['text-white', 'badge', 'me-2', b['badge']].join(' ')}>
							<SiUnity className='me-2' />
							<Trans i18nKey='unity' ns='Projects.Vortex' lang={lang} />
						</div>
						<div data-aos='fade-left' className={['text-white', 'badge', 'me-2', b['badge']].join(' ')}>
							<SiTile className='me-2' />
							<Trans i18nKey='tile' ns='Projects.Vortex' lang={lang} />
						</div>
					</div>
					<div className='py-5' data-aos='fade-up'>
						<p><Trans i18nKey='description' ns='Projects.Vortex' lang={lang} /></p>
					</div>
				</Col>
			</Row>
			{
				show && (
					<Fullview slide={slide}
						images={[Vortex1.href, Vortex2.href, Vortex3.href, Vortex4.href, Vortex5.href, Vortex6.href]}
						unshow={() => setShow(false)} />
				)
			}
		</Container>
	);
}
