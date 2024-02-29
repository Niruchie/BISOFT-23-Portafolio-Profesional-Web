import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import * as font from '../styles/webfonts/fonts.module.scss';
import * as b from '../styles/Home.module.scss';

export default function Home(){
	return (
		<Container className="d-flex justify-content-center align-items-center h-100 p-5">
			<Row>
				<Row className="text-center">
					<h1 className={font["mnc"].concat(" ", "h1")}>Fullstack software developer</h1>
				</Row>
				<Row className="text-center">
					<span className={b["noclass"].concat(" ", "h3")}>
						Proposals become into colors
					</span>
				</Row>
			</Row>
		</Container>
	);
}