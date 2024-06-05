// ButtonPrimary.tsx

import React, { FC } from 'react';
import styles from './Button.module.css';
import { MdArrowOutward } from "react-icons/md";

interface ButtonPrimaryProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  className?: string;
  textClassName?: string;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ type = 'button', text, className, textClassName }) => {
  return (
    <button className={`${className ? `${className} ` : ''}${styles.button}`} type={type}>
      <span className={`${textClassName ? `${textClassName} ` : ''}${styles.text}`}>{text}</span>
      <MdArrowOutward className={`${className ? `${className} ` : ''}${styles.icon}`} />
    </button>
  );
};

export default ButtonPrimary;
