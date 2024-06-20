import CotizarButton from '@/components/UI/CotizarButton'
import HeroPersonas from '@/components/shared/HeroPersonas'
import React from 'react'
import styles from './art.module.css';

const page = () => {
  return (

    <div>
      <HeroPersonas
        text1="Cuidás a tus"
        text2="empleados,"
        text3="cuidás tu"
        text4="empresa"
        img="/images/E-7.webp"
      />


<div className={`d-flex justify-content-center my-5 ${styles.artbuttonCotizar}`}>
  <CotizarButton
  text='Consultar asesoramiento y cotización'
    className={styles.buttonClass}
    textClassName={styles.Text} />
</div>

      <div className={`py-5 text-center ${styles.artCotizar}`}>
        <h2 className={styles.h2}>¿Necesitás una ART para el</h2>
        <h2 className={styles.h2}>personal doméstico?</h2>
        <div className="d-flex justify-content-center my-5">
          <CotizarButton
          text='Cotizar'
          />
        </div>
      </div>
    </div>
  )
}

export default page