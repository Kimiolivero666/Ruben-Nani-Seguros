import HeroPersonas from '@/components/shared/HeroPersonas'
import React from 'react'
import Image from "next/image";
import styles from './saludEmpresas.module.css';
import { Container } from 'react-bootstrap';
import TextBox from '@/components/UI/TextBox';
import ButtonPrimary from '@/components/UI/ButtonPrimary';
import CotizarButton from '@/components/UI/CotizarButton';

const page = () => {
  return (
    <div>
      <HeroPersonas
        text1="Tus empleados"
        text2="deben estar"
        text3="bien."
        text4=""
        img="/images/E-5.webp"
      />

      <div className={`py-5 text-center ${styles.saludTitle}`}>
        <h3 className={styles.h3}>Consultá por los planes corporativos de</h3>
        <Image className={styles.logoSalud} src="/images/prev-salud.png" alt="ImagenPrevencionSalud" width={400} height={80} />
        <div className="d-flex justify-content-center my-5">
          <CotizarButton 
          text='Cotizar'/>
        </div>
      </div>

      <Container className="my-5">
        <TextBox
          title='A1'
          parrafo1='Este plan cuenta con una cobertura escencial a precio conveniente. La cartilla es cerrada; po rlo tanto, tenés que recurrir a los  prestadores que allí se indican.'
          parrafo2='Con A1, las prótesis nacionales cuentan con una cobertura del 100%. Además, estamos las 24 h a tu lado y en tus pantallas. Por eso,
        contás con nuestro servicio de Consultorio Médico Virtual, que te permite comunicarte con un médico a través de una videollamada.'
          parrafo3=''
          parrafo4='' />
        <TextBox
          title='A2'
          parrafo1='Con plan A2 disponés de una cartilla abierta con reintegros y habitaciones individuales. En farmacias contás con una cobertura del  40%, en cirugía refractiva del 50%, en prótesis importadas del 50% y en nacionales del 100%. También incluye vacunas para alergias, lentes de contacto, acceso a programas preventivos, la mayor cobertura odontológica y 100% de cobertura en ortodancia con prestadores seleccionados.'
          parrafo2='Estamos a tu lado estés donde estés, por eso, con este plan contás con asistencia al viajero nacional e internaiconal.'
          parrafo3=''
          parrafo4='' />
        <TextBox
          title='A4'
          parrafo1='Este plan te ofrece una cartilla de prestadores de mayor prestigio a nivel nacional, un amplio vademécum, reintegros superadores y una cobertura más amplia en óptica, odontología, kinesiología y fisioterapia. Además, entre sus diferenciales, comprende el acceso a cirugías estéticas.'
          parrafo2='Estamos a tu lado sin importar dónde estés. Por eso, tu asistencia al viajero funciona a nivel nacional e internacional.'
          parrafo3=''
          parrafo4='' />
        <TextBox
          title='A5'
          parrafo1='El plan AS, además de cubrir cirugía estética y refractiva, te permite acceder a reintegros superadores, habitaciones VIP y una mayor cobertura en flebología, óptica, odontología, implantes y prótesis. En el caso de prótesis importadas, se cubren al 100%.'
          parrafo2='Además, como parte de este plan premium, te ofrecemos chequeos médicos y ecografía 3D, 4D o 5D, así como una cobertura del 50% en vademécum.'
          parrafo3='Para estar a tu lado cuando lo necesitás, el servicio de asistencia al viajero cuenta con cobertura nacional e internacional.'
          parrafo4='' />


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