import { Trans } from 'react-i18next';
import { useMediaQuery } from '@uidotdev/usehooks';
import { ReactElement, useCallback, useMemo, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SiJson, SiMicrosoftsharepoint, SiPowerapps, SiPowerfx } from 'react-icons/si';
import { ImFileExcel } from 'react-icons/im';

import { useLanguage } from '../../i18n/i18n.config';
import Fullview from './Fullview';

import * as b from '../../styles/Projects.module.scss';

const PowerApps1 = new URL(
	'../../styles/resources/projects/asesores/asesores-1.png?width=1366',
	import.meta.url,
);

const PowerApps2 = new URL(
	'../../styles/resources/projects/asesores/asesores-2.png?width=1366',
	import.meta.url,
);

const PowerApps3 = new URL(
	'../../styles/resources/projects/asesores/asesores-3.png?width=1366',
	import.meta.url,
);

const PowerApps4 = new URL(
	'../../styles/resources/projects/asesores/asesores-4.png?width=1366',
	import.meta.url,
);

const PowerApps5 = new URL(
	'../../styles/resources/projects/asesores/asesores-5.png?width=1366',
	import.meta.url,
);

const PowerApps6 = new URL(
	'../../styles/resources/projects/asesores/asesores-6.png?width=1366',
	import.meta.url,
);

export default function PowerAppsProject(): ReactElement {
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
					src={PowerApps2.href} width='100%'
					onClick={() => open(1)} />
			</Col>
			<Col>
				<img className='rounded border'
					src={PowerApps3.href} width='100%'
					onClick={() => open(2)} />
			</Col>
			<Col>
				<img className='rounded border'
					src={PowerApps4.href} width='100%'
					onClick={() => open(3)} />
			</Col>
			<Col>
				<img className='rounded border'
					src={PowerApps5.href} width='100%'
					onClick={() => open(4)} />
			</Col>
			<Col>
				<img className='rounded border'
					src={PowerApps6.href} width='100%'
					onClick={() => open(5)} />
			</Col>
		</Row>
	], [isLargerDevice, open]);

	return (
		<Container>
			<Row>
				<div className={['h2', 'mb-3', b['mnc']].join(' ')}>
					<Trans i18nKey='application' ns='Projects.PowerApps' lang={lang} />
				</div>
			</Row>
			<Row>
				<Col className='p-2' lg='6'>
					<img className={['rounded', b['border']].join(' ')}
						src={PowerApps1.href} width='100%' onClick={() => open(0)} />

					{!isLargerDevice && images}
				</Col>
				<Col className='p-2' lg='6'>
					{isLargerDevice && images}
					<hr />
					<div className='d-flex flex-row justify-content-start align-items-center'>
						<div className={['text-white', 'badge', 'me-2', b['badge']].join(' ')}>
							<SiJson className='me-2' />
							<Trans i18nKey='json' ns='Projects.PowerApps' lang={lang} />
						</div>
						<div className={['text-white', 'badge', 'me-2', b['badge']].join(' ')}>
							<SiPowerfx className='me-2' />
							<Trans i18nKey='powerfx' ns='Projects.Dynamic' lang={lang} />
						</div>
						<div className={['text-white', 'badge', 'me-2', b['badge']].join(' ')}>
							<ImFileExcel className='me-2' />
							<Trans i18nKey='excel' ns='Projects.PowerApps' lang={lang} />
						</div>
						<div className={['text-white', 'badge', 'me-2', b['badge']].join(' ')}>
							<SiPowerapps className='me-2' />
							<Trans i18nKey='powerapps' ns='Projects.PowerApps' lang={lang} />
						</div>
						<div className={['text-white', 'badge', 'me-2', b['badge']].join(' ')}>
							<SiMicrosoftsharepoint className='me-2' />
							<Trans i18nKey='sharepoint' ns='Projects.PowerApps' lang={lang} />
						</div>
					</div>
					<div className='py-5'>
						<p><Trans i18nKey='description' ns='Projects.PowerApps' lang={lang} /></p>
					</div>
				</Col>
			</Row>
			{
				show && (
					<Fullview slide={slide}
						images={[PowerApps1.href, PowerApps2.href, PowerApps3.href, PowerApps4.href, PowerApps5.href, PowerApps6.href]}
						unshow={() => setShow(false)} />
				)
			}
		</Container>
	);
}
