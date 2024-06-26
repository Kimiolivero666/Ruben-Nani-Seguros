
import React from 'react'
import { Container } from 'react-bootstrap'
import TextBox from '@/components/UI/TextBox';
import FooterPersonas from '@/components/shared/FooterPersonas';
import HeroPersonas from '@/components/shared/HeroPersonas';
import TitleSubMenu from '@/components/shared/TitleSubmenu/TitleSubMenu';

const moto = () => {
  return (

    < div >
    <TitleSubMenu text='Moto'/>
      <HeroPersonas
        text1="La mejor"
        text2="cobertura"
        text3="para rodar."
        text4="" // Proporciona un valor o deja en blanco si no se necesita
        img="/images/IMG-moto.png" // Asegúrate de que esta ruta es válida y está en 'public'
      />
      <Container className="my-5">

        <TextBox
          title='Para vos'
          parrafo1='Por fractura de huesos'
          parrafo2='Implante de prótesis'
          parrafo3='Fallecimiento accidental'
          parrafo4='Incapacidad total o parcial permanente' />

        <TextBox
          title='Para tu moto'
          parrafo1='Responsabilidad civil contra terceros transportados y no transportados'
          parrafo2='Robo'
          parrafo3='Incendio'
          parrafo4='Destrucción total' />
        
      </Container>
      <FooterPersonas title1='¿Ya tenés póliza?' title2='Envianosla y te mejoramos los costos en las' title3='mejores compañías'/>
    </ div>
  )
}

export default moto