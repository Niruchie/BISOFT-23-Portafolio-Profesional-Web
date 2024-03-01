import { Trans } from 'react-i18next';
import { Card, Accordion } from "react-bootstrap";
import { SiFigma, SiAdobeillustrator, SiAzuredevops, SiGit, SiGithub, SiJirasoftware } from "react-icons/si";

import { useLanguage } from "../../i18n/i18n.config";

export default function ToolsCardDCDev(props: { cardClasses?: string }) {
	const lang = useLanguage();
	const { cardClasses } = props;
	return (
		<Card className={cardClasses}>
			<Card.Title className='h4'>
				<Trans i18nKey="title" ns="Tools.Other" lang={lang} />
			</Card.Title>
			<Card.Body>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>
							<SiFigma size={32} className='me-3' />
							<Trans i18nKey="figma" ns="Tools.Other" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="figmaDesc" ns="Tools.Other" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							<SiAdobeillustrator size={32} className='me-3' />
							<Trans i18nKey="illustrator" ns="Tools.Other" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="illustratorDesc" ns="Tools.Other" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>
							<SiAzuredevops size={32} className='me-3' />
							<Trans i18nKey="azureDevOps" ns="Tools.Other" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="azureDevOpsDesc" ns="Tools.Other" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>
							<SiGit size={32} className='me-3' />
							<Trans i18nKey="git" ns="Tools.Other" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="gitDesc" ns="Tools.Other" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>
							<SiGithub size={32} className='me-3' />
							<Trans i18nKey="github" ns="Tools.Other" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="githubDesc" ns="Tools.Other" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header>
							<SiJirasoftware size={32} className='me-3' />
							<Trans i18nKey="jira" ns="Tools.Other" lang={lang} />
						</Accordion.Header>
						<Accordion.Body>
							<Trans i18nKey="jiraDesc" ns="Tools.Other" lang={lang} />
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Card.Body>
		</Card>
	);
}