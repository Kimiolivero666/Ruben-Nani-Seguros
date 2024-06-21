import React from 'react';
import styles from './salud.module.css';
import Image from "next/image";
import { Col, Container, Row } from 'react-bootstrap';
import TextBox from '@/components/UI/TextBox';
import HeroPersonas from '@/components/shared/HeroPersonas';
import CotizarButton from '@/components/UI/CotizarButton';

const Salud = () => {
  return (
    <div id='salud'>
      <HeroPersonas
        text1="Tu familia se"
        text2="merece estar"
        text3="tranquila."
        text4=""
        img="/images/IMG-salud.webp"
      />

      <div className={`py-5 text-center ${styles.saludTitle}`}>
        <Image className={styles.logoSalud} src="/images/prev-salud.png" alt="ImagenPrevencionSalud" width={400} height={80} />
      </div>

      <Container className="d-flex justify-content-center">
        <Row className="justify-content-center my-5">
          <Col lg="auto" className="my-4 text-center">
            <Image src="/images/Recurso22.png" alt="Imagen 1" width={100} height={100} />
            <p className={`my-3 mx-5 ${styles.parrafo}`}>
              Empleado en <br />
              relación de <br />
              dependencia</p>
          </Col>
          <Col lg="auto" className="my-4 text-center">
            <Image src="/images/Recurso22.png" alt="Imagen 2" width={100} height={100} />
            <p className={`my-3 mx-5 ${styles.parrafo}`}>
              Monotributista, <br />
              Responsable <br />
              inscripto</p>
          </Col>
        </Row>
      </Container>

      <div className={`py-5 text-center ${styles.saludCotizar}`}>
        <h2 className={styles.h2}>Consultá cotización por grupo familiar,</h2>
        <h2 className={styles.h2}>y campañas de descuento.</h2>
        <div className="d-flex justify-content-center my-5">
          <CotizarButton
            text='Cotizar'
            className={styles.buttonClass}
            IconoclassName={styles.CelesteIcon}
            textClassName={styles.hoverText}
          />
        </div>
      </div>

      <div className={`text-center py-5 ${styles.titleGrid}`}>
        <Container>
          <h2 className={`py-5 ${styles.h2grid}`}>Cobertura en los mejores prestadores</h2>
        </Container>

        <Container className={`d-flex justify-content-center ${styles.gridSalud}`}>
          <Row className="justify-content-center">
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso23.png" alt="Imagen 1" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso24.png" alt="Imagen 2" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso25.png" alt="Imagen 3" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso26.png" alt="Imagen 4" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso27.png" alt="Imagen 5" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso28.png" alt="Imagen 6" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso29.png" alt="Imagen 7" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso30.png" alt="Imagen 8" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso31.png" alt="Imagen 9" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso32.png" alt="Imagen 10" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso33.png" alt="Imagen 11" width={100} height={100} />
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs={4} className="my-4">
              <Image src="/images/Recurso34.png" alt="Imagen 12" width={100} height={100} />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5">
        <TextBox
          title='A1'
          parrafo1='Este plan cuenta con una cobertura esencial a precio conveniente. La cartilla es cerrada; por lo tanto, tenés que recurrir a los prestadores que allí se indican.'
          parrafo2='Con A1, las prótesis nacionales cuentan con una cobertura del 100%. Además, estamos las 24 h a tu lado y en tus pantallas. Por eso, contás con nuestro servicio de Consultorio Médico Virtual, que te permite comunicarte con un médico a través de una videollamada.'
        />

        <TextBox
          title='A2'
          parrafo1='Con plan A2 disponés de una cartilla abierta con reintegros y habitaciones individuales. En farmacias contás con una cobertura del 40%, en cirugía refractiva del 50%, en prótesis importadas del 50% y en nacionales del 100%. También incluye vacunas para alergias, lentes de contacto, acceso a programas preventivos, la mayor cobertura odontológica y 100% de cobertura en ortodoncia con prestadores seleccionados.'
          parrafo2='Estamos a tu lado estés donde estés, por eso, con este plan contás con asistencia al viajero nacional e internacional.'
        />

        <TextBox
          title='A4'
          parrafo1='Este plan te ofrece una cartilla de prestadores de mayor prestigio a nivel nacional, un amplio vademécum, reintegros superadores y una cobertura más amplia en óptica, odontología, kinesiología y fisioterapia. Además, entre sus diferenciales, comprende el acceso a cirugías estéticas.'
          parrafo2='Estamos a tu lado sin importar dónde estés. Por eso, tu asistencia al viajero funciona a nivel nacional e internacional.'
        />

        <TextBox
          title='A5'
          parrafo1='El plan A5, además de cubrir cirugía estética y refractiva, te permite acceder a reintegros superadores, habitaciones VIP y una mayor cobertura en flebología, óptica, odontología, implantes y prótesis. En el caso de prótesis importadas, se cubren al 100%.'
          parrafo2='Además, como parte de este plan premium, te ofrecemos chequeos médicos y ecografía 3D, 4D o 5D, así como una cobertura del 50% en vademécum.'
          parrafo3='Para estar a tu lado cuando lo necesitás, el servicio de asistencia al viajero cuenta con cobertura nacional e internacional.'
        />

        <div className={`d-flex justify-content-center my-5 ${styles.buttonCotizar}`}>
          <CotizarButton
            text='Cotizar'
            className={styles.buttonClass}
            textClassName={styles.Text} />
        </div>
      </Container>
    </div>
  )
}

export default Salud;
