import React, { FC } from 'react'
import styles from './FooterPersonas.module.css';
import { Container } from 'react-bootstrap';
import CotizarButton from '../UI/CotizarButton';

interface FooterPersonasProps {
  title1: string
  title2: string
  title3: string
}

const FooterPersonas: FC<FooterPersonasProps> = ({ title1, title2, title3,  }) => {
  return (
    <div className={styles.FooterPersonas}>
        <Container className={`${styles.boxFooter} text-center py-5 `}>
        <h2>
        {title1}
        </h2>
        <h3 >{title2} <br />
        {title3}</h3>
        <div className="d-flex justify-content-center my-5">
        <CotizarButton
        text='Cotizar'/>
        </div>
        
        </Container>
       </div>
  )
}

export default FooterPersonas