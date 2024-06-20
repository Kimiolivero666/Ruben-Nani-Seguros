'use client';

import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './cotizarButton.module.css';
import { MdArrowOutward } from "react-icons/md";

interface CotizarButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text?:string;
  className?: string;
  textClassName?: string;
  IconoclassName?: string;
}

const CotizarButton: FC<CotizarButtonProps> = ({ type = 'button', text, className, textClassName, IconoclassName }) => {

  const phoneNumber = "+542616431234";
  const message = "¡Hola! Estoy interesado en obtener más información.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const handleClick = () => {
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  }

  return (
    <button 
      onClick={handleClick} 
      className={classNames(className, styles.cotizarButton)} 
      type={type}
    >
      <span className={classNames(textClassName, styles.cotizarText)}>
        {text}
      </span>
      <MdArrowOutward className={classNames(IconoclassName, styles.cotizarIcon)} />
    </button>
  );
};

export default CotizarButton;
