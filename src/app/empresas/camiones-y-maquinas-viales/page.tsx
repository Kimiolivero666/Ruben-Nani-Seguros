import HeroPersonas from '@/components/shared/HeroPersonas'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './camiones.module.css';
import Image from 'next/image';
import FooterPersonas from '@/components/shared/FooterPersonas';
import TitleSubMenu from '@/components/shared/TitleSubmenu/TitleSubMenu';

const page = () => {
  return (
    <div>
      <TitleSubMenu text='Camiones y máquinas' />

      <HeroPersonas
        text1="Asegurá tu"
        text2="flota de"
        text3="camiones"
        text4=""
        img="/images/E-3.webp"
      />

      <div className={styles.heroBackground}>
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={6} className="text-center">
              <div className={styles.imageWrapper}>
                <Image
                  src='/images/E-4.webp'
                  alt="Hero"
                  width={400} // Ancho de la imagen
                  height={300} // Altura de la imagen
                  className={styles.heroImage}
                />
              </div>
            </Col>
            <Col md={6}>
              <h1 className={styles.heroTitle}>
                Asegurá tu <br />
                flota de <br />
                máquinas.
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterPersonas title1='¿Ya tenés póliza?' title2='Envianosla y te mejoramos los costos en las' title3='mejores compañías'/>
    </div>
  )
}

export default page