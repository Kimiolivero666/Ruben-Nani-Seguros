
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './banco.module.css';
import Image from 'next/image';
import TextBox from '@/components/UI/TextBox';
import CotizarButton from '@/components/UI/CotizarButton';
import ButtonPrimary from '@/components/UI/ButtonPrimary';

const BancoDelSolpage = () => {
  return (
    <>
      <section className={styles.banco}>
        <Container>
          <h1 className={styles.title}>Banco del sol</h1>
          <div className="pb-3">
          </div>

        </Container>
      </section>
      {/* hero */}

      <div className={styles.heroBackground}>
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={6}>
              <h1 className={styles.heroTitle}>
                El banco digital de <br />
                SANCOR SEGUROS
              </h1>
            </Col>
            <Col md={6} className="text-center">
              <div className={styles.imageWrapper}>
                <Image
                  src='/images/Hero-banco_1.png'
                  alt="Hero"
                  width={400} // Ancho de la imagen
                  height={300} // Altura de la imagen
                  className={styles.heroImage}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* section */}
      <Container className="my-5">
        <TextBox
          title='Beneficios'
          parrafo1='Promociones en comercios con reintegros'
          parrafo2='Promociones en Sancor Seguros'
          parrafo3='Promociones en Sancor Salud'
          parrafo4='' />
      </Container>

      {/* footer */}
      <div className={`py-5 text-center ${styles.descargar}`}>
        <h2 className={styles.h2}>¿Qué esperás?</h2>
        <h3 className={styles.h3}>Descargá la App y empezá ahora</h3>
        <h3 className={styles.h3}>a disfrutar los mejores beneficios</h3>
        <div className="d-flex justify-content-center my-5">
          <a className={styles.aHref} href="https://open.bancodelsol.com/sfBz8MjWDakGAkJz9"  target="_blank"
            rel="noopener noreferrer">
            <ButtonPrimary text='Descargar' />
          </a>
        </div>
      </div>
    </>
  )
}

export default BancoDelSolpage