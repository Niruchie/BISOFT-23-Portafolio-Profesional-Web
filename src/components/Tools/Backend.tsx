import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { Card, Accordion } from 'react-bootstrap';
import { SiNodedotjs, SiExpress, SiSocketdotio, SiCsharp, SiPython } from 'react-icons/si';

import { useLanguage } from '../../i18n/i18n.config';
import PipedreamHQ from '../../styles/resources/pipedreamhq.svg';

export default function ToolsCardBackend(props: { cardClasses?: string }): ReactElement {
	const lang = useLanguage();
	const { cardClasses } = props;

	return (
		<Card className={cardClasses}>
			<Card.Title className='h4'>
				<Trans i18nKey='title' ns='Tools.Backend' lang={lang} />
			</Card.Title>
			<Card.Body>
				<Accordion>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>
							<SiNodedotjs size={32} className='me-3' /> 
							<Trans i18nKey='nodejs' ns='Tools.Backend' lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey='nodejsDescription' ns='Tools.Backend' lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'>
						<Accordion.Header>
							<SiExpress size={32} className='me-3' /> 
							<Trans i18nKey='express' ns='Tools.Backend' lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey='expressDescription' ns='Tools.Backend' lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='2'>
						<Accordion.Header>
							<SiSocketdotio size={32} className='me-3' /> 
							<Trans i18nKey='socketio' ns='Tools.Backend' lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey='socketioDescription' ns='Tools.Backend' lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='3'>
						<Accordion.Header>
							<img className='me-3 rounded'
								width='32' height='32'
								src={PipedreamHQ}
								alt='PipedreamHQ' /> 
							<Trans i18nKey='pipedreamhq' ns='Tools.Backend' lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey='pipedreamhqDescription' ns='Tools.Backend' lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='4'>
						<Accordion.Header>
							<SiCsharp size={32} className='me-3' /> 
							<Trans i18nKey='csharp' ns='Tools.Backend' lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey='csharpDescription' ns='Tools.Backend' lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='5'>
						<Accordion.Header>
							<SiPython size={32} className='me-3' /> 
							<Trans i18nKey='python' ns='Tools.Backend' lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey='pythonDescription' ns='Tools.Backend' lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Card.Body>
		</Card>
	);
}