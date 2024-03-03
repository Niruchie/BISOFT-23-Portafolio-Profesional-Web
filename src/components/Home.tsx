import React from 'react';
import { Trans } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { useLanguage } from '../i18n/i18n.config';
import LGT from '../styles/resources/logo.svg';
import * as font from '../styles/webfonts/fonts.module.scss';
import * as b from '../styles/Home.module.scss';

export default function Home(){
	const lang = useLanguage();

	return (
		<Container fluid  className={b["display"].concat(" ", "d-flex flex-column justify-content-center align-items-center h-100 p-5")}>
				<Row className="text-center p-5">
					<img src={LGT} alt="=" width={256} height={256} />
				</Row>
				<Row className="text-center">
					<Row className="text-center">
						<h1 className={font["mnc"].concat(" ", "h1")}>
							<Trans i18nKey="fullstack" ns="Home" lang={lang} />
						</h1>
					</Row>
					<Row className="text-center">
						<span className={b["noclass"].concat(" ", "h3")}>
							<Trans i18nKey="proposals" ns="Home" lang={lang} />
						</span>
					</Row>
				</Row>
		</Container>
	);
}