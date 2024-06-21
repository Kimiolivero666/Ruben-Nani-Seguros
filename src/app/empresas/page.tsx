import DataTable from '@/components/UI/DataTable'
import FooterPersonas from '@/components/shared/FooterPersonas'
import HeroPersonas from '@/components/shared/HeroPersonas'
import React from 'react'
import { Container } from 'react-bootstrap'

const EmpresasPage = () => {
  return (
    <>
      <HeroPersonas
        text1="Consultá por"
        text2="tu flota."
        text3=""
        text4=""
        img="/images/E-1.png" // Asegúrate de que esta ruta es válida y está en 'public'
      />
      <Container className="my-5">
        <DataTable />
      </Container>
      <FooterPersonas title1='¿Ya tenés póliza?' title2='Envianosla y te mejoramos los costos en las' title3='mejores compañías' />
    </>
  )
}

export default EmpresasPage