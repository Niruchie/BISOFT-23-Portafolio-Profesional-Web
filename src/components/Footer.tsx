import { ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io';

import { useNavigationContext } from './hooks/NavigationContext';
import { useLanguage } from '../i18n/i18n.config';
import * as b from '../styles/Footer.module.scss';

export default function Footer(): ReactElement {
	const lang = useLanguage();
	const { t } = useTranslation("Footer");
	const { Footer: refFooter } = useNavigationContext();

	return (
		<Container fluid ref={refFooter} as="footer" className={b["footer"].concat(" ", "bg-dark py-5")}>
			<Form as={Container} className={b["contact"].concat(" ", "w-100 p-5")}>
				<Row className="text-center mb-5">
					<span className={b["mnc"].concat(" ", "h1")}>
						<Trans i18nKey="contactTitle" ns="Footer" lang={lang} />
					</span>
				</Row>

				<Row>
					<Col sm={12} md={12} lg={6} className="my-4">
						<Form.Group controlId="name">
							<Form.Label>
								<Trans i18nKey="nameLabel" ns="Footer" lang={lang} />
							</Form.Label>
							<Form.Control
								placeholder={t("namePlaceholder")}
								className="p-2"
								type="text"
								required
							/>
						</Form.Group>
					</Col>
					<Col sm={12} md={12} lg={6} className="my-4">
						<Form.Group controlId="email">
							<Form.Label>
								<Trans i18nKey="emailLabel" ns="Footer" lang={lang} />
							</Form.Label>
							<Form.Control
								placeholder={t("emailPlaceholder")}
								className="p-2"
								type="email"
							/>
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Form.Group controlId="message" className="my-4">
						<Form.Label>
							<Trans i18nKey="messageLabel" ns="Footer" lang={lang} />
						</Form.Label>
						<Form.Control
							placeholder={t("messagePlaceholder")}
							className="p-2"
							as="textarea"
							required
							rows={7}
						/>
					</Form.Group>
				</Row>

				<Row>
					<Col className="text-end">
						<Button variant="primary-outline" type="submit">
							<Trans i18nKey="sendButton" ns="Footer" lang={lang} />
						</Button>
					</Col>
				</Row>
			</Form>

			<Row className="d-flex justify-content-center align-items-center text-center w-100">
				<span className={b["contact-icon"]}>
					<a target="_blank" rel="noopener noreferrer"
						href="https://github.com/Niruchie">
						<IoLogoGithub size={32} />
					</a>
				</span>
				<span className={b["contact-icon"]}>
					<a target="_blank" rel="noopener noreferrer"
						href="https://www.linkedin.com/in/anthonypadillau">
						<IoLogoLinkedin size={32} />
					</a>
				</span>
				<span className={b["contact-icon"]}>
					<a target="_blank" rel="noopener noreferrer"
						href="https://wa.me/+50683130243">
						<IoLogoWhatsapp size={32} />
					</a>
				</span>
			</Row>

			<hr className={b["hr"]} />

			<Row>
				<Col className="text-center text-white">
					<Trans
						lang={lang}
						ns="Footer"
						i18nKey="footerText"
						values={{ year: new Date().getFullYear() }}
					/>
				</Col>
			</Row>
		</Container>
	);
}
