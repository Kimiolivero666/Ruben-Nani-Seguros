
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import styles from './page.module.css';
import Hero from "@/components/UI/Hero";
import Card from "../components/UI/Card";
import { Row, Container, Col } from "react-bootstrap";
import ButtonContact from "@/components/UI/ButtonContact";
import ButtonContact2 from "@/components/UI/ButtonContact2";
import Grid from '@/components/UI/Grid';

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <section className={styles.section}>
          <Container className='py-5'>
            <div>
              <Row>
                <Col md={6} lg={3} className="d-flex justify-content-center align-items-center my-3">
                  <Card icon="/images/icono-1.webp" title="Personas" />
                </Col>
                <Col md={6} lg={3} className="d-flex justify-content-center align-items-center my-3">
                  <Card icon="/images/icono-2.webp" title="Empresas" />
                </Col>
                <Col md={6} lg={3} className="d-flex justify-content-center align-items-center my-3">
                  <Card icon="/images/icono-3.webp" title="Transportes" />
                </Col>
                <Col md={6} lg={3} className="d-flex justify-content-center align-items-center my-3">
                  <Card icon="/images/icono-4.webp" title="Bco Del Sol" />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className={styles.contactame}>
          <Container>
            <h2 className={`text-center ${styles.title}`}>Contactame</h2>
            <Row>
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <ButtonContact />
              </Col>
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <ButtonContact2 />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`pb-5 ${styles.grid}`}>
          
            <Grid />

        </section>
      </div>
    </>
  );
}
