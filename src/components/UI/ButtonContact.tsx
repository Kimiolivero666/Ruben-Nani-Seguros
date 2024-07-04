'use client';

import React from 'react';
import styles from './ButtonContact.module.css';
import { FaWhatsapp } from "react-icons/fa";

const ButtonContact = () => {
  const phoneNumber = "+542616301566";
  const message = "¡Hola! Estoy interesado en obtener más información.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="text-center mb-5 w-100">
      <button onClick={handleClick} className={styles.button}>
        <FaWhatsapp className={styles.icon} />
      </button>
      <h6 className={styles.info}>+54 261 630 1566</h6>
    </div>
  );
}

export default ButtonContact;
