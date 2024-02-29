import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import * as font from '../styles/webfonts/fonts.module.scss';

const Tools = () => {
	return (
		<Container className="d-flex border justify-content-center align-items-center h-100 p-5">
			<Row>
				<Row className="h1 text-center">
					<h1 className={font["mnc"]}>My toolbox</h1>
				</Row>
				<Row className="h2 text-center">
					<p>Some tools that I use</p>
				</Row>
			</Row>
		</Container>
	);
}

export default Tools;