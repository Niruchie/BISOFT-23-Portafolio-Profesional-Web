import { Trans } from 'react-i18next';
import { Button, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useWindowSize } from '@uidotdev/usehooks';

import { useNavigationContext } from './hooks/NavigationContext';
import { useLanguage } from '../i18n/i18n.config';
import * as b from '../styles/Profile.module.scss';

export default function Profile() {
	const lang = useLanguage();
	const { height } = useWindowSize();
	const { Profile: refProfile } = useNavigationContext();

	return (
		<Container fluid className='m-0 p-0 g-0' style={{ minHeight: height }}>
			<Container fluid ref={refProfile} className='py-5'>
				<Row className='text-center w-100 p-5'>
					<span className={b['mnc'].concat(' ', 'h1')}>
						<Trans i18nKey='title' ns='Profile' lang={lang} />
					</span>
				</Row>
				<Row>
					<Container fluid className='d-flex justify-content-end mx-0 my-4 p-0'>
						<div className='text-truncate text-white text-end w-75 p-5' style={{ backgroundColor: 'var(--color-secondary)', borderRadius: '1rem 0 0 1rem' }}>
							<p className='h1'>
								<Trans i18nKey='name' ns='Profile' lang={lang} />
							</p>
						</div>
					</Container>
					<Container fluid className='d-flex justify-content-start mx-0 my-4 p-0'>
						<div className='text-wrap text-white text-start w-75 p-5' style={{ backgroundColor: 'var(--color-tertiary)', borderRadius: '0 1rem 1rem 0' }}>
							<p className='h1'>
								<Trans i18nKey='grade' ns='Profile' lang={lang} />
							</p>
							<p className='w-100 text-start'>
								<Trans i18nKey='gradeSub' ns='Profile' lang={lang} />
							</p>
						</div>
					</Container>
					<Container fluid className='d-flex justify-content-end mx-0 my-4 p-0'>
						<div className='text-wrap text-white text-end w-75 p-5' style={{ backgroundColor: 'var(--color-primary)', borderRadius: '1rem 0 0 1rem' }}>
							<p className='h1'>
								<Trans i18nKey='experience' ns='Profile' lang={lang} />
							</p>
							<p className='w-100 text-end'>
								<Trans i18nKey='experienceDescription' ns='Profile' lang={lang} />
							</p>
						</div>
					</Container>
					<Container fluid className='d-flex justify-content-start mx-0 my-4 p-0'>
						<div className='text-wrap text-white text-start w-75 p-5' style={{ backgroundColor: 'var(--color-secondary)', borderRadius: '0 1rem 1rem 0' }}>
							<p className='h1'>
								<Trans i18nKey='demostration' ns='Profile' lang={lang} />
							</p>
							<p className='w-100 text-start'>
								<Trans i18nKey='demostrationSub' ns='Profile' lang={lang} />
							</p>
							<p className='w-100 text-start mt-5'>
								<Button as='a' href='https://drive.google.com/file/d/1mu9YuIQFZn-1OBGNm9ztK99J4UolVeY0/view?usp=sharing'
									target='_blank' rel='noreferrer' className={['text-white', 'p-4'].join(' ')}
										style={{ backgroundColor: 'var(--color-tertiary)', borderRadius: '1rem' }}
											variant='primary-outline'>
									<h4>
										<Trans i18nKey='lookAtTheColors' ns='Profile' lang={lang} />
									</h4>
								</Button>
							</p>
						</div>
					</Container>
				</Row>
			</Container>
		</Container>
	);
}