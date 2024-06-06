import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="d-flex justify-content-center">
      <Row className="justify-content-center">
        <Col lg="auto" md="auto" sm={4} xs={4} className="my-4">
          <Image src="/images/1.png" alt="Imagen 1" width={100} height={100} />
        </Col>
        <Col lg="auto" md="auto" sm={4} xs={4} className="my-4">
          <Image src="/images/2.png" alt="Imagen 2" width={100} height={100} />
        </Col>
        <Col lg="auto" md="auto" sm={4} xs={4} className="my-4">
          <Image src="/images/3.png" alt="Imagen 3" width={100} height={100} />
        </Col>
        <Col lg="auto" md="auto" sm={4} xs={4} className="my-4">
          <Image src="/images/4.png" alt="Imagen 4" width={100} height={100} />
        </Col>
        <Col lg="auto" md="auto" sm={4} xs={4} className="my-4">
          <Image src="/images/5.png" alt="Imagen 5" width={100} height={100} />
        </Col>
        <Col lg="auto" md="auto" sm={4} xs={4} className="my-4">
          <Image src="/images/6.png" alt="Imagen 6" width={100} height={100} />
        </Col>
        <Col lg="auto" md="auto" sm={4} xs={4} className="my-4">
          <Image src="/images/7.png" alt="Imagen 7" width={100} height={100} />
        </Col>
        <Col lg="auto" md="auto" sm={4} xs={4} className="my-4">
          <Image src="/images/8.png" alt="Imagen 8" width={100} height={100} />
        </Col>
        <Col lg="auto" md="auto" sm={4} xs={4} className="my-4">
          <Image src="/images/9.png" alt="Imagen 9" width={100} height={100} />
        </Col>
      </Row>
    </Container>
  );
}
