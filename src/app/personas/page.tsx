// app/personas/page.tsx
import { Container } from 'react-bootstrap';
import styles from './personas.module.css';
import SubMenu from '@/components/shared/SubMenu';
import Hero2 from '@/components/shared/Hero2';
import DataTable from '@/components/UI/DataTable';
import FooterPersonas from '@/components/shared/FooterPersonas';

const PersonasPage = () => {
  return (
    <>
      <Hero2
        text1="Conocé las"
        text2="coberturas"
        text3="que tenemos."
        text4="" // Proporciona un valor o deja en blanco si no se necesita
        img="/images/IMG-auto.png" // Asegúrate de que esta ruta es válida y está en 'public'
      />
      <Container className="my-5">
        <DataTable />
      </Container>
      <FooterPersonas title1='¿Ya tenés póliza?' title2='Envianosla y te mejoramos los costos en las' title3='mejores compañías'/>
    </>
  );
};

export default PersonasPage;
