import TextBox from '@/components/UI/TextBox'
import HeroPersonas from '@/components/shared/HeroPersonas'
import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './integrales.module.css';
import CotizarButton from '@/components/UI/CotizarButton';

const page = () => {
  return (
    <div>
      <HeroPersonas
        text1="Agrupá riesgos"
        text2="en una misma"
        text3="póliza."
        text4=""
        img="/images/E-6.webp"
      />

      <Container>
        <TextBox
          title='Ventajas'
          parrafo1='Practicidad en la suscripción'
          parrafo2='Rebajas en las tasas'
          parrafo3=''
          parrafo4=''
          parrafo5=''
          parrafo6=''
          parrafo7=''
          parrafo8=''
          parrafo9=''
          parrafo10=''
          parrafo11=''
          parrafo12=''
          parrafo13=''
          parrafo14=''
        />
      </Container>

      <div className={`py-5 text-center ${styles.hogarTitle}`}>
        <h2>INTEGRAL DE COMERCIO</h2>
      </div>

      <Container>
        <TextBox
          title='Tipos de riesgos'
          parrafo1='Comercio e industria'
          parrafo2='Consorcios ocupados por familias'
          parrafo3='Consorcios ocupados por familias y/u oficinas'
          parrafo4='Consorcios ocupados por familias y/u oficinas y/o locales en planta baja, galerias comerciales (partes comunes)'
          parrafo5=''
          parrafo6=''
          parrafo7=''
          parrafo8=''
          parrafo9=''
          parrafo10=''
          parrafo11=''
          parrafo12=''
          parrafo13=''
          parrafo14=''
        />

        <TextBox
          title='Coberturas'
          parrafo1='Incendio del edificio y del contenido'
          parrafo2='Robo del contenido general y mercaderías'
          parrafo3='Robo de valores en caja fuerte'
          parrafo4='Robo de valores en tránsito'
          parrafo5='Responsabilidad Civil Comprensiva'
          parrafo6='Daños materiales de equipos electrónicos'
          parrafo7='Daños y roturas de cristales'
          parrafo8='Daños por agua al contenido'
          parrafo9=''
          parrafo10=''
          parrafo11=''
          parrafo12=''
          parrafo13=''
          parrafo14=''
        />
      </Container>


      <div className={`py-5 text-center ${styles.hogarTitle}`}>
        <h2>INTEGRAL DE COUNTRIES</h2>
      </div>

      <Container>
        <TextBox
          title='Coberturas'
          parrafo1='Incendio del edificio y del contenido'
          parrafo2='Robos contenido y valores en caja'
          parrafo3='Jugadores de golf'
          parrafo4='Cristales'
          parrafo5='Responsabilidad civil, espejo de agua, actividades deportivas, pileta de natación'
          parrafo6=''
          parrafo7=''
          parrafo8=''
          parrafo9=''
          parrafo10=''
          parrafo11=''
          parrafo12=''
          parrafo13=''
          parrafo14=''
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

export default page