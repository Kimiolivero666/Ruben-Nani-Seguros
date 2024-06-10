// Hero2.tsx
import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './Hero2.module.css';

interface Hero2Props {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    img?: string; // La imagen es opcional
}

const Hero2: FC<Hero2Props> = ({ text1, text2, text3, text4, img }) => {
    const defaultImage = '/images/default-image.png'; // Ruta a una imagen por defecto en 'public'

    return (
        <div className={styles.heroBackground}>
            <Container>
                <Row className="align-items-center text-center text-md-start">
                    <Col md={6}>
                        <h1 className={styles.heroTitle}>
                            {text1} <br />
                            {text2} <br />
                            {text3} <br />
                            {text4}
                        </h1>
                    </Col>
                    <Col md={6} className="text-center">
                        <div className={styles.imageWrapper}>
                            <Image
                                src={img || defaultImage} // Usa la imagen proporcionada o la imagen por defecto
                                alt="Hero"
                                width={400} // Ancho de la imagen
                                height={300} // Altura de la imagen
                                className={styles.heroImage}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero2;
