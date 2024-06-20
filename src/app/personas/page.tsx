// app/personas/page.tsx
import { Container } from 'react-bootstrap';
import DataTable from '@/components/UI/DataTable';
import FooterPersonas from '@/components/shared/FooterPersonas';
import HeroPersonas from '@/components/shared/HeroPersonas';

const PersonasPage = () => {
  return (
    <>
      <HeroPersonas
        text1="Conocé las"
        text2="coberturas"
        text3="que tenemos."
        text4="" // Proporciona un valor o deja en blanco si no se necesita
        img="/images/IMG-auto.webp" // Asegúrate de que esta ruta es válida y está en 'public'
      />
      <Container className="my-5">
        <DataTable />
      </Container>
      <FooterPersonas title1='¿Ya tenés póliza?' title2='Envianosla y te mejoramos los costos en las' title3='mejores compañías'/>
    </>
  );
};

export default PersonasPage;
