import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './nosotros.module.css';
import HeroPersonas from '@/components/shared/HeroPersonas';
import CotizarButton from '@/components/UI/CotizarButton';

const NosotrosPage = () => {
  return (
    <div>
      <section className={styles.nosotros}>
        <Container>
          <h1 className={styles.title}>Nosotros</h1>
          <div className="pb-3">
          </div>
        </Container>
      </section>


      {/* hero */}
      <HeroPersonas
        text1="Experiencia y"
        text2="confiabilidad"
        text3=""
        text4=""
        img="/images/IMG-nosotros.webp"
      />

      {/* experiencia */}
      <Container className="my-5">
        <div className={styles.box}>
          <h3 className={styles.titleExpeeriencia}> </h3>
          <div className="d-flex">
            <p className={styles.parrafo}>Contamos con un equipo coordinado de trabajo altamente especializado en la gestión de siniestros y el análisis de riesgos. Nuestro compromiso con la excelencia y la seguridad se ve respaldado por alianzas estratégicas con reconocidas compañías como Federación, Sancor, San Cristóbal, Mercantil, entre otras. Confiá en nosotros para brindarte el mejor servicio y la tranquilidad que merecés.</p>
          </div>
        </div>

        <div className={`d-flex justify-content-center my-5 ${styles.buttonCotizar}`}>
          <CotizarButton
            text='Contacta'
            className={styles.buttonClass}
            textClassName={styles.Text} />
        </div>
      </Container>
    </div>
  )
}

export default NosotrosPage