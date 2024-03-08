import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { Card, Accordion } from "react-bootstrap";
import { SiHtml5, SiPug, SiCss3, SiJavascript, SiTypescript, SiReact } from "react-icons/si";

import { useLanguage } from "../../i18n/i18n.config";


export default function ToolsCardFrontend(props: { cardClasses?: string }): ReactElement {
	const lang = useLanguage();
	const { cardClasses } = props;

	return (
		<Card className={cardClasses}>
			<Card.Title className='h4'>
				<Trans i18nKey="title" ns="Tools.Frontend" lang={lang} />
			</Card.Title>
			<Card.Body>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>
							<SiHtml5 size={32} className='me-3' />
							<Trans i18nKey="html" ns="Tools.Frontend" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="htmlDescription" ns="Tools.Frontend" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							<SiPug size={32} className='me-3' />
							<Trans i18nKey="pug" ns="Tools.Frontend" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="pugDescription" ns="Tools.Frontend" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>
							<SiCss3 size={32} className='me-3' />
						
						<Trans i18nKey="css" ns="Tools.Frontend" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="cssDescription" ns="Tools.Frontend" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>
							<SiJavascript size={32} className='me-3' />
							<Trans i18nKey="javascript" ns="Tools.Frontend" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="javascriptDescription" ns="Tools.Frontend" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>
							<SiTypescript size={32} className='me-3' />
							<Trans i18nKey="typescript" ns="Tools.Frontend" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="typescriptDescription" ns="Tools.Frontend" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header>
							<SiReact size={32} className='me-3' />
							<Trans i18nKey="react" ns="Tools.Frontend" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="reactDescription" ns="Tools.Frontend" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Card.Body>
		</Card>
	);
}