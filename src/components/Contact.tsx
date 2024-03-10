import { request } from 'gaxios';
import { CgDanger } from 'react-icons/cg';
import toast, { LoaderIcon, Toaster } from 'react-hot-toast';
import { Trans, useTranslation } from 'react-i18next';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';


import { useLanguage } from '../i18n/i18n.config';
import * as b from '../styles/Footer.module.scss';
import { createPortal } from 'react-dom';
import { IoRocket } from 'react-icons/io5';

const PipedreamSelfEmailURL = 'https://eoedpw7zdnwyrsg.m.pipedream.net';
/*
	Example of a POST request to Pipedream:
	{
		"email": "persona@email.com",
		"message": "Este es un proyecto de ejemplo.",
		"name": "Persona 1"
	}
*/


export default function Contact(): ReactElement {
	const lang = useLanguage();
	const { t } = useTranslation('Footer');
	const [status, setStatus] = useState<'idle' | 'pending' | 'success'>('idle');
	const [toaster, setToaster] = useState<HTMLDivElement | null>(null);
	const ref = useRef<HTMLFormElement | null>(null);

	const handleSubmit = useCallback(async () => {
		try {
			setStatus('pending');
			
			if (!ref.current) {
				return console
					.error('[Contact] Form not found.');
			}
			
			const form = ref.current;
			const formData = new FormData(form);

			const data = {
				name: '',
				email: '',
				message: '',
			};

			formData
				.forEach((value, key) => {
					data[key] = value;
				});

			if (!data.name.trim().length){
				setStatus('idle');
				toast(
					t('nameError'),
					{
						icon: <CgDanger />,

					}
				);
				return;
			}

			if (!data.email.trim().length){
				setStatus('idle');
				toast(
					t('emailError'),
					{
						icon: <CgDanger />,
					}
				);
				return;
			}

			if (!data.message.trim().length){
				setStatus('idle');
				toast(
					t('messageError'),
					{
						icon: <CgDanger />,
					}
				);
				return;
			}

			const response = await request({
				url: PipedreamSelfEmailURL,
				method: 'POST',
				data: data,
			});

			if (response.status !== 204) {
				setStatus('idle');
				throw response.data;
			}

			setStatus('success');
			toast(
				t('formSubmitSuccess'),
				{
					icon: <IoRocket />,
				}
			);

			return response.data;
		} catch (error) {
			setStatus('idle');
			toast(
				t('formSubmitError'),
				{
					icon: <CgDanger />,
				}
			);

			return error;
		}
	}, [t]);

	useEffect(() => {
		const toaster = document
			.createElement('div');

		toaster.style.left = '0';
		toaster.style.bottom = '0';
		toaster.style.width = '100vw';
		toaster.style.height = '100vh';
		toaster.style.zIndex = '50000';
		toaster.style.position = 'fixed';
		toaster.style.pointerEvents = 'none';
		toaster.style.backgroundColor = 'transparent';

		document.body
			.appendChild(toaster);

		setToaster(toaster);

		return () => {
			document.body
				.removeChild(toaster);
		};
	}, []);

	return (
		<Container as={Form} className={b['contact'].concat(' ', 'w-100 my-5')} ref={ref}>
				<Row>
					<Col sm={12} md={12} lg={6} className='my-4'>
						<Form.Group controlId='name'>
							<Form.Label>
								<Trans i18nKey='nameLabel' ns='Footer' lang={lang} />
							</Form.Label>
							<Form.Control
								placeholder={t('namePlaceholder')}
								className='p-2'
								type='text'
								name='name'
								required
							/>
						</Form.Group>
					</Col>
					<Col sm={12} md={12} lg={6} className='my-4'>
						<Form.Group controlId='email'>
							<Form.Label>
								<Trans i18nKey='emailLabel' ns='Footer' lang={lang} />
							</Form.Label>
							<Form.Control
								placeholder={t('emailPlaceholder')}
								className='p-2'
								type='email'
								name='email'
							/>
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Form.Group controlId='message' className='my-4'>
						<Form.Label>
							<Trans i18nKey='messageLabel' ns='Footer' lang={lang} />
						</Form.Label>
						<Form.Control
							placeholder={t('messagePlaceholder')}
							className='p-2'
							name='message'
							as='textarea'
							required
							rows={7}
						/>
					</Form.Group>
				</Row>

				<Row>
					<Col className='d-flex justify-content-end align-items-center my-4'>
						{
							status === 'idle' && (
								<Button variant='primary-outline' onClick={handleSubmit}>
									<Trans i18nKey='sendButton' ns='Footer' lang={lang} />
								</Button>
							)
						}

						{
							status === 'pending'
								&& (<LoaderIcon />)
						}

						{
							status === 'success' && (
								<Button variant='primary-outline' disabled>
									<Trans i18nKey='formSubmitSuccess' ns='Footer' lang={lang} />
								</Button>
							)
						}
					</Col>
				</Row>

				{
					toaster && createPortal(
						<Toaster
							position='bottom-center'
							reverseOrder={true}
						/>,
						toaster,
					)
				}
			</Container>
	);
}