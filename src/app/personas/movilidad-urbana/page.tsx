
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Hero2 from '@/components/shared/Hero2';
import TextBox from '@/components/UI/TextBox';
import FooterPersonas from '@/components/shared/FooterPersonas';
import Image from "next/image";
import styles from './movilidadUrbana.module.css';


const movilidadUrbana = () => {
  return (

    <>

      <Hero2
        text1="Hacé lo que"
        text2="más te"
        text3="gusta con"
        text4="tranquilidad."
        img="/images/IMG-mvd-urb.png"
      />

      <Container className="d-flex justify-content-center">
        <Row className="justify-content-center my-5">
          <Col lg="auto" md="auto" sm={4} xs={4} className="my-4 text-center">
            <Image src="/images/Recurso12.png" alt="Imagen 1" width={100} height={100} />
            <p className={`my-3 ${styles.parrafo}`}>
              Bicicletas <br />
              alta y media <br />
              gama</p>
          </Col>
          <Col lg="auto" md="auto" sm={4} xs={4} className="my-4 text-center">
            <Image src="/images/Recurso13.png" alt="Imagen 2" width={100} height={100} />
            <p className={`my-3 ${styles.parrafo}`}>
              Bicicletas <br />
              eléctricas  <br />
            </p>
          </Col>
          <Col lg="auto" md="auto" sm={4} xs={4} className="my-4 text-center">
            <Image src="/images/Recurso14.png" alt="Imagen 3" width={100} height={100} />
            <p className={`my-3 ${styles.parrafo}`}>
              Monopatines<br />
              eléctricos <br />
            </p>
          </Col>
          <Col lg="auto" md="auto" sm={4} xs={4} className="my-4 text-center">
            <Image src="/images/Recurso15.png" alt="Imagen 4" width={100} height={100} />
            <p className={`my-3 ${styles.parrafo}`}>
              Motos <br />
              eléctricas <br />
            </p>
          </Col>
          <Col lg="auto" md="auto" sm={4} xs={4} className="my-4 text-center">
            <Image src="/images/Recurso16.png" alt="Imagen 5" width={100} height={100} />
            <p className={`my-3 ${styles.parrafo}`}>
              Patinetas <br />
              y similares<br />
            </p>
          </Col>
          <Col lg="auto" md="auto" sm={4} xs={4} className="my-4 text-center">
            <Image src="/images/Recurso17.png" alt="Imagen 6" width={100} height={100} />
            <p className='mt-3'>
              Par de skíes, <br />
              Par de palos <br />
            </p>
          </Col>
          <Col lg="auto" md="auto" sm={4} xs={4} className="my-4 text-center">
            <Image src="/images/Recurso18.png" alt="Imagen 7" width={100} height={100} />
            <p className={`my-3 ${styles.parrafo}`}>
              Tabla de <br />
              Snowboard<br />
            </p>
          </Col>
          <Col lg="auto" md="auto" sm={4} xs={4} className="my-4 text-center">
            <Image src="/images/Recurso19.png" alt="Imagen 8" width={100} height={100} />
            <p className={`my-3 ${styles.parrafo}`}>
              Tabla<br />
              de Surf<br />
            </p>
          </Col>
          <Col lg="auto" md="auto" sm={4} xs={4} className="my-4 text-center">
            <Image src="/images/Recurso21.png" alt="Imagen 9" width={100} height={100} />
            <p className={`my-3 ${styles.parrafo}`}>
              Par de<br />
              Rollers <br />
            </p>
          </Col>
        </Row>
      </Container>

 <Container className="my-5">

        <TextBox
          title='Responsabilidad civil'
          parrafo1='Cobertura contra daños a terceros por el uso de los bienes asegurados.'
          parrafo2=''
          parrafo3=''
          parrafo4='' />

        <TextBox
          title='Accidentes personales'
          parrafo1='Coberturas de muerte accidental, invalidez y asistencia médico-farmacéutica.'
          parrafo2=''
          parrafo3=''
          parrafo4='' />

        <TextBox
          title='Salud'
          parrafo1='Coberturas de indemnización frente a fracturas, intervenciones y/o prótesis.'
          parrafo2=''
          parrafo3=''
          parrafo4='' />

        <TextBox
          title='Robo'
          parrafo1='Cobertura contra robo de los bienes asegurados.'
          parrafo2=''
          parrafo3=''
          parrafo4='' />

      </Container>

      <FooterPersonas title1='Que los imprevistos no te compliquen.' title2='Contratá un seguro para estar tranquilo en' title3='todos los ámbitos de tu vida.' />
    </>
  )
}

export default movilidadUrbana