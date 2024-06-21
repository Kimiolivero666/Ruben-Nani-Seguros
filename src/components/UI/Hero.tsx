import React from 'react'
import styles from './hero.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import ButtonPrimary from './ButtonPrimary';


const Hero = () => {
  return (
   <div className={styles.heroBackground}>
    <Container>
      <Row className="align-items-center text-center text-md-start">
        <Col md={6}>
        <div className={styles.Title}>
          <h1 className={styles.heroTitle}>
            La tranquilidad <br />
            de estar en <br />
            buenas manos
          </h1>
          <ButtonPrimary type="button" text="Consultar" href="/contacto" />
          </div>
          
        </Col>
        <Col md={6} className="text-center">
          <div className={styles.imageWrapper}>
            <Image
              src='/images/IMG-home.webp'
              alt="Hero"
              width={400} 
              height={300} 
              className={styles.heroImage}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  
  );
}

export default Hero