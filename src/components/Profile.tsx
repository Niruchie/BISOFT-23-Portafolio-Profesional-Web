import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import * as b from '../styles/Profile.module.scss';

export default function Profile() {
	return (
		<Container fluid className='py-5'>
			<Row className='text-center w-100 p-5'>
				<span className={b["mnc"].concat(" ", "h1")}>Perfil</span>
			</Row>
			<Row>
				<Container fluid className="d-flex justify-content-end mx-0 my-4 p-0">
					<div className='text-truncate text-white text-end w-75 p-5' style={{ backgroundColor: 'var(--color-secondary)', borderRadius: '1rem 0 0 1rem' }}>
						<p className='h1'>Anthony Padilla</p>
					</div>
				</Container>
				<Container fluid className="d-flex justify-content-start mx-0 my-4 p-0">
					<div className='text-wrap text-white text-start w-75 p-5' style={{ backgroundColor: 'var(--color-tertiary)', borderRadius: '0 1rem 1rem 0' }}>
						<p className='h1'>Fullstack software developer</p>
						<p className='w-100 text-start'>y administrador de redes...</p>
					</div>
				</Container>
				<Container fluid className="d-flex justify-content-end mx-0 my-4 p-0">
					<div className='text-wrap text-white text-end w-75 p-5' style={{ backgroundColor: 'var(--color-primary)', borderRadius: '1rem 0 0 1rem' }}>
						<p className='h1'>Tres años de experiencia</p>
						<p className='w-100 text-end'>
							Desarrollando aplicaciones para una empresa multinacional, estoy buscando hacer crecer mi carrera para alcanzar mis objetivos. Principalmente soy desarrollador de Node.Js y React, pero me puedo desenvolver durante el trabajo en plataformas más robustas como lo son C# o Python. También tengo enfoques en el manejo de bases de datos mayormente de PosgresSQL, con experiencia colateral en MySQL y SQL Server
						</p>
					</div>
				</Container>
			</Row>
		</Container>
	);
}
