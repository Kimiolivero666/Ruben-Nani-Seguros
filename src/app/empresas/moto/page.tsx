
import React from 'react'
import { Container } from 'react-bootstrap'
import TextBox from '@/components/UI/TextBox';
import HeroPersonas from '@/components/shared/HeroPersonas';
import TitleSubMenu from '@/components/shared/TitleSubmenu/TitleSubMenu';
import FooterPersonas from '@/components/shared/FooterPersonas';

const moto = () => {
  return (

    <>
    <TitleSubMenu text='Moto' />

      <HeroPersonas
        text1="Consultá por"
        text2="tu flota."
        text3=""
        text4="" 
        img="/images/E-2.webp" 
      />
      <Container className="my-5">

        <TextBox
          title='Para el conductor'
          parrafo1='Por fractura de huesos'
          parrafo2='Implante de prótesis'
          parrafo3='Fallecimiento accidental'
          parrafo4='Incapacidad total o parcial permanente' />

        <TextBox
          title='Para tu flota'
          parrafo1='Responsabilidad civil contra terceros transportados y no transportados'
          parrafo2='Robo'
          parrafo3='Incendio'
          parrafo4='Destrucción total' />
        
      </Container>
      <FooterPersonas title1='¿Ya tenés póliza?' title2='Envianosla y te mejoramos los costos en las' title3='mejores compañías'/>
    </>
  )
}

export default moto