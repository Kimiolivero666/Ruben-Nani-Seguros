import React from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import styles from './footer.module.css';
import Link from 'next/link';
import Image from "next/image";
// icons
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <Container>
                    <Row className='pb-5'>
                        <Col lg={4} sm={6} xs={6} className={styles.footerRuben}>
                            <h2>Rubén</h2>
                            <h2>Fernando</h2>
                            <h2>Nani</h2>
                        </Col>
                        <Col lg={3} sm={6} xs={6} className={styles.footerMenu}>
                            <ul>
                                <li>
                                    <Link className={styles.footerLink} href="/" >
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.footerLink} href="/personas" >
                                        Personas
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.footerLink} href="/empresas" >
                                        Empresas
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.footerLink} href="/bancoDelSol" >
                                        Banco del Sol
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.footerLink} href="/nosotros" >
                                        Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link className={styles.footerLink} href="/contacto" >
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={5} sm={12} xs={12} className={styles.footerInfo}>
                            <ul>
                                <li className={styles.footerLiInfo}>
                                    <FaWhatsapp className={styles.icon} />
                                    <a href="https://wa.me/+542616301566" target="_blank" rel="noopener noreferrer" >
                                        2616301566
                                    </a>
                                </li>
                                <li className={styles.footerLiInfo}>
                                    <BsFillTelephoneFill />
                                    <p>261-3467479</p>
                                </li>
                                <li className={styles.footerLiInfo}>
                                    <MdOutlineEmail className={styles.icon} />
                                    <a href="mailto:rubennani2024@gmail.com?subject=Asunto%20Predefinido&body=Mensaje%20Predefinido">
                                        rubennani2024@gmail.com
                                    </a>

                                </li>
                                <li className={styles.footerLiInfo}>
                                    <FaLocationDot />
                                    <p>
                                        Chuquisaca, 1010 Godoy Cruz. Mendoza
                                    </p>

                                </li>
                                <li className={styles.footerLiInfo}>
                                    <FaInstagram />
                                    <a href="https://www.instagram.com/rubenfernandonani/" target="_blank" rel="noopener noreferrer">
                                        rubenfernandonani
                                    </a>
                                </li>
                                <li>
                                    <p className={styles.footerCopyright}>
                                        ©Copyright-desarrollada por CoolBaby Agency
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* footer de abajo, pie dde pagina*/}

            <div className={styles.footerPiePagina}>
                <Container>
                    <Row className='my-3 d-flex align-items-center'>
                        <Col lg={2} sm={12} className='text-center d-flex align-items-center'>
                            <div className={styles.footerMatricula}>
                                <p className={styles.footerMatriculaP}>Número de matricula <br />103466</p>
                            </div>
                        </Col>
                        <Col lg={5} sm={12} className={`d-flex justify-content-between align-items-center ${styles.footerDptoOrientacion}`}>
                            <div className={`text-center ${styles.footerBoxDptoOrientacion}`}>
                                <p>Departamento de Orientación <br />y Asistencia al Asegurado</p>
                            </div>
                            <p className={styles.ParrafodptoOrientacion}>0800-666-8400</p>
                        </Col>
                        <Col lg={5} sm={12} className={`d-flex justify-content-between align-items-center ${styles.footerSuperIntendencia}`}>
                            <a href="https://www.argentina.gob.ar/superintendencia-de-seguros" target="_blank" rel="noopener noreferrer">www.argentina.gob.ar/ssn</a>
                            <Image src="/images/superintendencia.jpg" alt="Imagen 3" width={200} height={30} />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
