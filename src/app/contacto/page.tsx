import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './contacto.module.css';
import ButtonContact from '@/components/UI/ButtonContact';
import ButtonContact2 from '@/components/UI/ButtonContact2';

// iconos
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const ContactoPage = () => {
  return (
    <div>
      <section className={styles.contacto}>
        <Container>
          <h1 className={styles.title}>Contacto</h1>
          <div className="pb-3">
          </div>
        </Container>
      </section>

      {/* contacto */}
      <section className={styles.contactame}>
        <Container>
          <Row className='pt-5'>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <ButtonContact />
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <ButtonContact2 />
            </Col>
          </Row>

          <Row className=''>
            <Col md={6} className="text-center align-items-center">

              <div className="text-center mb-5 w-100">
                <div className={styles.boxContacto}>
                  <BsFillTelephoneFill className={styles.icon} />
                </div>
                <h6 className={styles.info}>+54 261-346 7479</h6>
              </div>
            </Col>

            <Col md={6} className="d-flex justify-content-center align-items-center">
              <div className="text-center mb-5 w-100">
                <div className={styles.boxContacto}>
                  <FaLocationDot className={styles.icon} />
                </div>
                <h6 className={styles.info}>Chuquisaca, 1010 Godoy Cruz. Mendoza</h6>
              </div>
            </Col>
          </Row>

          <Row className=''>
            <Col md={3}>

            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <div className="text-center mb-5 w-100">
                <a href="https://www.instagram.com/rubenfernandonani/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.button}>
                    <FaInstagram className={styles.icon} />
                  </div>
                </a>
                <h6 className={styles.info}>rubenfernandonani</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ContactoPage