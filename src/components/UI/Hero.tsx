import React from 'react'
import styles from './hero.module.css';
import { Container } from 'react-bootstrap';
import ButtonPrimary from './ButtonPrimary';


const Hero = () => {
  return (
    <section>
      {/* desktop */}
      <div className={`position-relative ${styles.hero}`}>
        <Container>
          <div className={styles.title}>
            <h1>La tranquilidad <br /> de estar en <br /> buenas manos</h1>
          </div>
          <div className={styles.buttonHero}>
            <ButtonPrimary type="button" text="Consultar" />
          </div>
        </Container>
      </div>
      {/* mobile */}
      <div className={`position-relative ${styles.heroMobile}`}>
        <Container >
          <div className={styles.boxMobile} >
            <div className={styles.title}>
              <h1>La tranquilidad <br /> de estar en <br /> buenas manos</h1>
            </div>
            <div className={styles.buttonHero}>
              <ButtonPrimary type="button" text="Consultar" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Hero