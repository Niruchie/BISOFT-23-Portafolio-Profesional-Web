import { ReactElement } from 'react';
import { Trans } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io';

import { useNavigationContext } from './hooks/NavigationContext';
import { useLanguage } from '../i18n/i18n.config';
import Contact from './Contact';

import * as b from '../styles/Footer.module.scss';

export default function Footer(): ReactElement {
	const lang = useLanguage();
	const { Footer: refFooter } = useNavigationContext();

	return (
		<Container fluid ref={refFooter} as='footer' className={b['footer'].concat(' ', 'bg-dark py-5')}>
			<Row className='text-center m'>
				<span className={b['mnc'].concat(' ', 'h1')}>
					<Trans i18nKey='contactTitle' ns='Footer' lang={lang} />
				</span>
			</Row>
			
			<Contact />
			
			<Row className='d-flex justify-content-center align-items-center text-center w-100'>
				<span className={b['contact-icon']}>
					<a target='_blank' rel='noopener noreferrer'
						href='https://github.com/Niruchie'>
						<IoLogoGithub size={32} />
					</a>
				</span>
				<span className={b['contact-icon']}>
					<a target='_blank' rel='noopener noreferrer'
						href='https://www.linkedin.com/in/anthonypadillau'>
						<IoLogoLinkedin size={32} />
					</a>
				</span>
				<span className={b['contact-icon']}>
					<a target='_blank' rel='noopener noreferrer'
						href='https://wa.me/+50683130243'>
						<IoLogoWhatsapp size={32} />
					</a>
				</span>
			</Row>

			<hr className={b['hr']} />

			<Row>
				<Col className='text-center text-white'>
					<Trans
						lang={lang}
						ns='Footer'
						i18nKey='footerText'
						values={{ year: new Date().getFullYear() }}
					/>
				</Col>
			</Row>
		</Container>
	);
}
