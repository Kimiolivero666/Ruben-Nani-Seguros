
import React from 'react'
import styles from './hogar.module.css';
import { Container } from 'react-bootstrap';
import TextBox from '@/components/UI/TextBox';
import FooterPersonas from '@/components/shared/FooterPersonas';
import HeroPersonas from '@/components/shared/HeroPersonas';
import TitleSubMenu from '@/components/shared/TitleSubmenu/TitleSubMenu';



const page = () => {
  return (
    <div>
      <TitleSubMenu text='Hogar y accidentes personales' />
      <HeroPersonas
        text1="Mantené"
        text2="asegurado lo"
        text3="que más"
        text4="querés."
        img="/images/IMG-hogar.webp"
      />
      <div className={`py-5 text-center ${styles.hogarTitle}`}>
        <h2>SEGURO COMBINADO FAMILIAR</h2>
      </div>
      <Container>
        <TextBox
          title='Incendio de edificio'
          parrafo1='Incendio contenido general'
          parrafo2='Gastos de limpieza y/o retiro de escombros '
          parrafo3='Gastos de alojamiento '
          parrafo4='Gastos de mudanza y guardamuebles '
          parrafo5='Responsabilidad civil linderos'
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
          title='Robo y/o hurto'
          parrafo1='Robo y/o hurto específicos'
          parrafo2='Coberturas disponibles para la tecnología'
          parrafo3='Todo riesgo en domicilio sin nomina'
          parrafo4='Todo riesgo en domicilio con nomina'
          parrafo5='Todo riesgo argentina y el mundo'
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
          title='Otras coberturas'
          parrafo1='Cristales'
          parrafo2='Artefactos sanitarios, piletas y mesadas'
          parrafo3='Jugadores de golf (efectos personales)'
          parrafo4='Jugadores de golf (palos) '
          parrafo5='Jugadores de golf (hoyo en uno)'
          parrafo6='Jugadores de golf (responsabilidad civil)'
          parrafo7='Daños por agua contenida en redes e instalaciones'
          parrafo8='Accidentes personales para el tomador de seguros'
          parrafo9='Accidentes personales para servicio doméstico'
          parrafo10='Responsabilidad civil hechos privados'
          parrafo11='Adicionales de la naturaleza'
          parrafo12='Daños por granizo '
          parrafo13='Terremoto (incendio y daños)'
          parrafo14='Daños por rayo'
        />
      </Container>

      <div className={`py-5 text-center ${styles.hogarTitle}`}>
        <h2>Accidentes personales</h2>
      </div>

      <Container>
        <TextBox
          title='Máxima Cobertura'
          parrafo1='Diseñada para los trabajadores independientes no contemplados en la Ley de Riesgos de Trabajo'
          parrafo2='Vigencia desde 1 mes y hasta un año'
          parrafo3='Cubre a los trabajadores declarados en su lugar de trabajo'
          parrafo4='Brinda a tu personal un servicio médico integral, con prestaciones'
          parrafo5='médicas y farmacéuticas'
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
          title='Ocasión de Trabajo'
          parrafo1='Especialmente diseñada para particulares que contraten tareas puntuales o quienes se dediquen a manejar servicios con personal eventual'
          parrafo2='Vigencia desde 1 día y hasta un año'
          parrafo3='Te cubre por las horas y el lugar que declares'
          parrafo4='Ideal para particulares que desean contratar seguros eventuales y para empresas proveedoras de servicios por plazos'
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
          title='24 Horas'
          parrafo1='Pensada para trabajadores que por su actividad profesional o comercial, un accidente puede repercutir directamente en sus ingresos mensuales o en su economía personal y familiar'
          parrafo2='Vigencia desde 6 meses y hasta 1 año'
          parrafo3='Te cubre las 24 horas, en cualquier momento y lugar'
          parrafo4='Ideal para actividades adminitrativas, profesionales, comerciales, trabajadores autónomos, estudiantes, etc'
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
          title='Otras coberturas'
          parrafo1='Muerte accidental'
          parrafo2='Invalidez total y/o parcial permanente'
          parrafo3='Renta diaria por invalidez temporaria'
          parrafo4='Reembolso de gastos médicos'
          parrafo5='Servicios médicos'
          parrafo6='Renta diaria por internación '
          parrafo7='Reembolso de gastos de pepelio'
          parrafo8=''
          parrafo9=''
          parrafo10=''
          parrafo11=''
          parrafo12=''
          parrafo13=''
          parrafo14=''
        />
      </Container>

      <FooterPersonas title1='Que los imprevistos no te compliquen.' title2='Contratá un seguro para estar tranquilo en' title3='todos los ámbitos de tu vida.' />
    </div>
  )
}

export default page