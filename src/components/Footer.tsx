import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io';

import * as b from '../styles/Footer.module.scss';
import { Trans, useTranslation } from 'react-i18next';

export default function Footer() {
	const [t] = useTranslation("Footer");

	return (
			<Container fluid as="footer" className={b["footer"].concat(" ", "bg-dark py-5")}>
				<Form as={Container} className={b["contact"].concat(" ", "w-100 p-5")}>
					<Row className="text-center mb-5">
						<h2><Trans i18nKey="contactTitle" ns="Footer" /></h2>
					</Row>

					<Row>
						<Col>
							<Form.Group controlId="name" className="my-4">
								<Form.Label>
									<Trans i18nKey="nameLabel" ns="Footer" />
								</Form.Label>
								<Form.Control
									placeholder={t("namePlaceholder")}
									className="p-2"
									type="text"
									required
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group controlId="email" className="my-4">
								<Form.Label>
									<Trans i18nKey="emailLabel" ns="Footer" />
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
								<Trans i18nKey="messageLabel" ns="Footer" />
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
							<Button
								variant="primary-outline"
								children={t("sendButton")}
								type="submit"
							/>
						</Col>
					</Row>
				</Form>

				<Row className="d-flex justify-content-center align-items-center">
						<div className={b["contact-icon"]}>
							<a href="https://github.com/Niruchie"
								children={<IoLogoGithub size={25} />}
								rel="noopener noreferrer"
								target="_blank" />
						</div>
						<div className={b["contact-icon"]}>
				 			<a href="https://www.linkedin.com/in/anthonypadillau"
								children={<IoLogoLinkedin size={25} />}
								rel="noopener noreferrer"
								target="_blank" />
						</div>
						<div className={b["contact-icon"]}>
							<a href="https://wa.me/+50683130243"
								children={<IoLogoWhatsapp size={25} />}
								rel="noopener noreferrer"
								target="_blank" />
						</div>
				</Row>

				<hr className={b["hr"]} />

				<Row>
					<Col className="text-center text-white">
						<Trans ns="Footer"
							i18nKey="footerText"
							values={{ year: new Date().getFullYear() }}
						/>
					</Col>
				</Row>
			</Container>
	);
}
