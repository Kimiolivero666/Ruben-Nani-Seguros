import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './nosotros.module.css';
import HeroPersonas from '@/components/shared/HeroPersonas';
import CotizarButton from '@/components/UI/CotizarButton';

const NosotrosPage = () => {
  return (
    <div>
      <section className={styles.nosotros}>
        <Container>
          <h1 className={styles.title}>Nosotros</h1>
          <div className="pb-3">
          </div>
        </Container>
      </section>


      {/* hero */}
      <HeroPersonas
        text1="Rubén"
        text2="Fernando"
        text3="Nani."
        text4=""
        img="/images/Ruben-Fernando-Nani.webp"
      />

      {/* experiencia */}
      <Container className="my-5">
        <div className={styles.box}>
          <h3 className={styles.titleExpeeriencia}>Experiencia y confiabilidad</h3>
          <div className="d-flex">
            <p className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          </div>
        </div>

        <div className={`d-flex justify-content-center my-5 ${styles.buttonCotizar}`}>
          <CotizarButton
            text='Contacta'
            className={styles.buttonClass}
            textClassName={styles.Text} />
        </div>
      </Container>
    </div>
  )
}

export default NosotrosPage