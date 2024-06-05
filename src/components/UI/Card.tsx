// Card.tsx

import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Card.module.css';
import ButtonPrimary from './ButtonPrimary';

interface CardProps {
  icon: string; 
  title: string;
}

const Card: FC<CardProps> = ({ icon, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <Image 
          src={icon}
          alt=""
          width={100}
          height={100}
        />
        <h3 className={styles.title}>{title}</h3>
        <ButtonPrimary
          text='CONOCER MÁS'
          className={styles.button}
          textClassName={styles.blueText} // Nueva prop para la clase del texto del botón
        />
      </div>
    </div>
  )
}

export default Card;
