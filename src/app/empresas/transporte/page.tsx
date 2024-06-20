import TextBox from '@/components/UI/TextBox'
import HeroPersonas from '@/components/shared/HeroPersonas'
import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './transporte.module.css';
import CotizarButton from '@/components/UI/CotizarButton';

const transporte = () => {
  return (
    <div>
      <HeroPersonas
        text1="Asegurá tus"
        text2="cargas valiosas."
        text3=""
        text4=""
        img="/images/E-8.webp"
      />

      <Container>
        <TextBox
          title='Modalidades de seguros'
          parrafo1='Seguros por viajes'
          parrafo2='Seguros anuales por vehículos determinados'
          parrafo3='Seguros anuales flotantes por declaraciones de viaje'
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
        <h2>TRANSPORTE TERRESTRE</h2>
      </div>

      <Container>
        <div className={styles.box}>
          <h3 className={styles.title}>Cobertura básica</h3>
          <p className={styles.parrafo}>Se indemnizarán los daños y pérdidas que sufran lasmercancias o bienes trasnportados como consecuencia de:</p>
        </div>
        <TextBox
          title=''
          parrafo1='Cobertura básica'
          parrafo2='Cobertura básica'
          parrafo3='Incendio, rayo o explosión'
          parrafo4='Huracán, ciclón, tornado, inundación, aluvión o alud'
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
          title='Coberturas adicionales'
          parrafo1='Robo'
          parrafo2='Robo, hurto y falta de entrega'
          parrafo3='Robo, hurto, falta de entrega y desparación'
          parrafo4='Robo en carga y descraga'
          parrafo5='Exención de responsabilidad del transportista'
          parrafo6='Descompostura de caminaria frigorífica'
          parrafo7='Hechos de huelga, Lock Out o tumulto'
          parrafo8='Vandalismo y/o hechos maliciosos'
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

export default transporte