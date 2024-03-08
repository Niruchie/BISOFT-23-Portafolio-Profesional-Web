import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { Card, Accordion } from "react-bootstrap";
import { SiMicrosoftsqlserver, SiMysql, SiMongodb, SiSqlite, SiPostgresql } from "react-icons/si";

import { useLanguage } from "../../i18n/i18n.config";
import DBeaver from '../../styles/resources/dbeaver.svg';

export default function ToolsCardDatabase(props: { cardClasses?: string }): ReactElement {
	const lang = useLanguage();
	const { cardClasses } = props;

	return (
		<Card className={cardClasses}>
			<Card.Title className='h4'>
				<Trans i18nKey="title" ns="Tools.Database" lang={lang} />
			</Card.Title>
			<Card.Body>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>
							<img className="me-3 rounded"
								width="32" height="32"
								src={DBeaver}
								alt="DBeaver" />
								<Trans i18nKey="dbeaver" ns="Tools.Database" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="dbeaverDescription" ns="Tools.Database" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							<SiMicrosoftsqlserver size={32} className='me-3' />
							<Trans i18nKey="microsoftsqlserver" ns="Tools.Database" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="microsoftsqlserverDescription" ns="Tools.Database" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>
							<SiMysql size={32} className='me-3' />
							<Trans i18nKey="mysql" ns="Tools.Database" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="mysqlDescription" ns="Tools.Database" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>
							<SiMongodb size={32} className='me-3' />
							<Trans i18nKey="mongodb" ns="Tools.Database" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="mongodbDescription" ns="Tools.Database" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>
							<SiSqlite size={32} className='me-3' />
							<Trans i18nKey="sqlite" ns="Tools.Database" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="sqliteDescription" ns="Tools.Database" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header>
							<SiPostgresql size={32} className='me-3' />
							<Trans i18nKey="postgresql" ns="Tools.Database" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="postgresqlDescription" ns="Tools.Database" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Card.Body>
		</Card>
	);
}