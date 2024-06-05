'use client';

import React from 'react';
import styles from './ButtonContact.module.css';
import { MdOutlineEmail } from "react-icons/md";

const ButtonContact2 = () => {
  const email = "rubenapellido@gmail.com";
  const subject = "Consulta de información";
  const body = "¡Hola! Estoy interesado en obtener más información.";

  const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleClick = () => {
    window.location.href = mailtoURL;
  }

  return (
    <div className="text-center mb-5 w-100">
      <button onClick={handleClick} className={styles.button}>
        <MdOutlineEmail className={styles.icon} />
      </button>
      <h6 className={styles.info}>{email}</h6>
    </div>
  );
}

export default ButtonContact2;
