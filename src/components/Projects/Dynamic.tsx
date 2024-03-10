import { Trans } from 'react-i18next';
import { useMediaQuery } from '@uidotdev/usehooks';
import { ReactElement, useCallback, useMemo, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IoLogoNodejs, IoLogoReact } from 'react-icons/io5';
import { SiExpress, SiMysql, SiPostgresql, SiTypescript } from 'react-icons/si';

import { useLanguage } from '../../i18n/i18n.config';
import Fullview from './Fullview';

import * as b from '../../styles/Projects.module.scss';

const Dynamic1 = new URL(
	'../../styles/resources/projects/dynamic/dynamic-1.png?width=1366',
	import.meta.url,
);

const Dynamic2 = new URL(
	'../../styles/resources/projects/dynamic/dynamic-2.png?width=1366',
	import.meta.url,
);

const Dynamic3 = new URL(
	'../../styles/resources/projects/dynamic/dynamic-3.png?width=1366',
	import.meta.url,
);

const Dynamic4 = new URL(
	'../../styles/resources/projects/dynamic/dynamic-4.png?width=1366',
	import.meta.url,
);

const Dynamic5 = new URL(
	'../../styles/resources/projects/dynamic/dynamic-5.png?width=1366',
	import.meta.url,
);

const Dynamic6 = new URL(
	'../../styles/resources/projects/dynamic/dynamic-6.png?width=1366',
	import.meta.url,
);

export default function DynamicProject(): ReactElement {
	const lang = useLanguage();
	const [slide, setSlide] = useState<number>(0);
	const [show, setShow] = useState<boolean>(false);
	const isLargerDevice = useMediaQuery('(min-width: 992px)');

	const open = useCallback((slide: number) => {
		setSlide(slide);
		setShow(true);
	}, []);

	const images = useMemo(() => [
		<Row key='dynamic' className={isLargerDevice ? 'mb-3' : 'mt-3'}>
			<Col>
				<img className='rounded border'
					src={Dynamic2.href} width='100%'
					onClick={() => open(1)} />
			</Col>
			<Col>
				<img className='rounded border'
					src={Dynamic3.href} width='100%'
					onClick={() => open(2)} />
			</Col>
			<Col>
				<img className='rounded border'
					src={Dynamic4.href} width='100%'
					onClick={() => open(3)} />
			</Col>
			<Col>
				<img className='rounded border'
					src={Dynamic5.href} width='100%'
					onClick={() => open(4)} />
			</Col>
			<Col>
				<img className='rounded border'
					src={Dynamic6.href} width='100%'
					onClick={() => open(5)} />
			</Col>
		</Row>
	], [isLargerDevice, open]);

	return (
		<Container>
			<Row>
				<div className={['h2', 'mb-3', b['mnc']].join(' ')}>
					<Trans i18nKey='application' ns='Projects.Dynamic' lang={lang} />
				</div>
			</Row>
			<Row>
				<Col className='p-2' lg='6'>
					<img className={['rounded', b['border']].join(' ')}
						src={Dynamic1.href} width='100%' onClick={() => open(0)} />

					{!isLargerDevice && images}
				</Col>
				<Col className='p-2' lg='6'>
					{isLargerDevice && images}
					<hr />
					<div className='d-flex flex-row justify-content-start align-items-center flex-wrap'>
						<div className={['text-white', 'badge', 'my-2 ', 'me-2', b['badge']].join(' ')}>
							<IoLogoReact className='me-2' />
							<Trans i18nKey='react' ns='Projects.Dynamic' lang={lang} />
						</div>
						<div className={['text-white', 'badge', 'my-2 ', 'me-2', b['badge']].join(' ')}>
							<SiTypescript className='me-2' />
							<Trans i18nKey='typescript' ns='Projects.Dynamic' lang={lang} />
						</div>
						<div className={['text-white', 'badge', 'my-2 ', 'me-2', b['badge']].join(' ')}>
							<IoLogoNodejs className='me-2' />
							<Trans i18nKey='nodejs' ns='Projects.Dynamic' lang={lang} />
						</div>
						<div className={['text-white', 'badge', 'my-2 ', 'me-2', b['badge']].join(' ')}>
							<SiExpress className='me-2' />
							<Trans i18nKey='express' ns='Projects.Dynamic' lang={lang} />
						</div>
						<div className={['text-white', 'badge', 'my-2 ', 'me-2', b['badge']].join(' ')}>
							<SiMysql className='me-2' />
							<Trans i18nKey='mysql' ns='Projects.Dynamic' lang={lang} />
						</div>
						<div className={['text-white', 'badge', 'my-2 ', 'me-2', b['badge']].join(' ')}>
							<SiPostgresql className='me-2' />
							<Trans i18nKey='postgresql' ns='Projects.Dynamic' lang={lang} />
						</div>
					</div>
					<div className='py-5'>
						<p><Trans i18nKey='description' ns='Projects.Dynamic' lang={lang} /></p>
					</div>
				</Col>
			</Row>
			{
				show && (
					<Fullview slide={slide}
						images={[Dynamic1.href, Dynamic2.href, Dynamic3.href, Dynamic4.href, Dynamic5.href, Dynamic6.href]}
						unshow={() => setShow(false)} />
				)
			}
		</Container>
	);
}
