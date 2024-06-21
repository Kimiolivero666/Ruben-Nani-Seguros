import React, { FC } from 'react';
import styles from './Button.module.css';
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";


interface ButtonPrimaryProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  className?: string;
  textClassName?: string;
  href?: string; // Hacemos que href sea opcional
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ type = 'button', text, className, textClassName, href }) => {
  const buttonClassName = `${className ? `${className} ` : ''}${styles.button}`;
  const textClass = `${textClassName ? `${textClassName} ` : ''}${styles.text}`;
  const iconClass = `${className ? `${className} ` : ''}${styles.icon}`;

  return href ? (
    <Link href={href} className={buttonClassName} role="button">
      <span className={textClass}>{text}</span>
      <MdArrowOutward className={iconClass} />
    </Link>
  ) : (
    <button className={buttonClassName} type={type}>
      <span className={textClass}>{text}</span>
      <MdArrowOutward className={iconClass} />
    </button>
  );
};

export default ButtonPrimary;
