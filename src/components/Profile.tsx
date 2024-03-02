import React, { useRef } from 'react';
import { Trans } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { useLanguage } from '../i18n/i18n.config';
import * as b from '../styles/Profile.module.scss';

export default function Profile() {
	const lang = useLanguage();

	return (
		<Container fluid className='py-5'>
			<Row className={b["mnc"].concat(" ", "text-center  w-100 p-5")}>
				<span className="h1">
					<Trans i18nKey="title" ns="Profile" lang={lang}/>
				</span>
			</Row>
			<Row>
				<Container fluid className="d-flex justify-content-end mx-0 my-4 p-0">
					<div className='text-truncate text-white text-end w-75 p-5' style={{ backgroundColor: 'var(--color-secondary)', borderRadius: '1rem 0 0 1rem' }}>
						<p className='h1'>
							<Trans i18nKey="name" ns="Profile" lang={lang}/>
						</p>
					</div>
				</Container>
				<Container fluid className="d-flex justify-content-start mx-0 my-4 p-0">
					<div className='text-wrap text-white text-start w-75 p-5' style={{ backgroundColor: 'var(--color-tertiary)', borderRadius: '0 1rem 1rem 0' }}>
						<p className='h1'>
							<Trans i18nKey="grade" ns="Profile" lang={lang}/>
						</p>
						<p className='w-100 text-start'>
							<Trans i18nKey="gradeSub" ns="Profile" lang={lang}/>
						</p>
					</div>
				</Container>
				<Container fluid className="d-flex justify-content-end mx-0 my-4 p-0">
					<div className='text-wrap text-white text-end w-75 p-5' style={{ backgroundColor: 'var(--color-primary)', borderRadius: '1rem 0 0 1rem' }}>
						<p className='h1'>
							<Trans i18nKey="experience" ns="Profile" lang={lang}/>
						</p>
						<p className='w-100 text-end'>
							<Trans i18nKey="experienceDescription" ns="Profile" lang={lang}/>
						</p>
					</div>
				</Container>
			</Row>
		</Container>
	);
}