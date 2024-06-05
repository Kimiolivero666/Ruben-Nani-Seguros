import React from 'react'
import styles from './personas.module.css';
import { Container } from 'react-bootstrap';

const PersonasPages = () => {
  return (
    <section className={styles.personas}>
      <Container>
      <h1 className={styles.title}>Personas</h1>
      </Container>
      
    </section>
  )
}

export default PersonasPages