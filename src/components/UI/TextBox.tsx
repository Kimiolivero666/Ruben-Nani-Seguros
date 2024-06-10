import React, { FC } from 'react'
import { MdArrowOutward } from "react-icons/md";
import styles from './TextBox.module.css';

interface TextBoxProps {
  title: string,
  parrafo1: string,
  parrafo2?: string,
  parrafo3?: string,
  parrafo4?: string,
  parrafo5?: string,
  parrafo6?: string,
  parrafo7?: string,
  parrafo8?: string,
  parrafo9?: string,
  parrafo10?: string,
  parrafo11?: string,
  parrafo12?: string,
  parrafo13?: string,
  parrafo14?: string,
}

const TextBox: FC<TextBoxProps> = ({ title, parrafo1, parrafo2, parrafo3, parrafo4,  parrafo5,  parrafo6,  parrafo7, parrafo8, parrafo9, parrafo10, parrafo11,  parrafo12,  parrafo13,  parrafo14, }) => {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>{title}</h3>
      <div className="d-flex">
        <MdArrowOutward className={styles.icon} />
        <p className={styles.parrafo}>{parrafo1}</p>
      </div>
      {parrafo2 && (
        <div className="d-flex">
          <MdArrowOutward className={styles.icon} />
          <p className={styles.parrafo}>{parrafo2}</p>
        </div>
      )}
      {parrafo3 && (
        <div className="d-flex">
          <MdArrowOutward className={styles.icon} />
          <p className={styles.parrafo}>{parrafo3}</p>
        </div>
      )}
      {parrafo4 && (
        <div className="d-flex">
          <MdArrowOutward className={styles.icon} />
          <p className={styles.parrafo}>{parrafo4}</p>
        </div>
      )}
      {parrafo5 && (
        <div className="d-flex">
          <MdArrowOutward className={styles.icon} />
          <p className={styles.parrafo}>{parrafo5}</p>
        </div>
      )}
      {parrafo6 && (
        <div className="d-flex">
          <MdArrowOutward className={styles.icon} />
          <p className={styles.parrafo}>{parrafo6}</p>
        </div>
      )}
      {parrafo7 && (
        <div className="d-flex">
          <MdArrowOutward className={styles.icon} />
          <p className={styles.parrafo}>{parrafo7}</p>
        </div>
      )}
       {parrafo8 && (
   <div className="d-flex">
     <MdArrowOutward className={styles.icon} />
     <p className={styles.parrafo}>{parrafo8}</p>
   </div>
 )}
 {parrafo9 && (
   <div className="d-flex">
     <MdArrowOutward className={styles.icon} />
     <p className={styles.parrafo}>{parrafo9}</p>
   </div>
 )}
 {parrafo10 && (
   <div className="d-flex">
     <MdArrowOutward className={styles.icon} />
     <p className={styles.parrafo}>{parrafo10}</p>
   </div>
 )}
 {parrafo11 && (
   <div className="d-flex">
     <MdArrowOutward className={styles.icon} />
     <p className={styles.parrafo}>{parrafo11}</p>
   </div>
 )}
 {parrafo12 && (
   <div className="d-flex">
     <MdArrowOutward className={styles.icon} />
     <p className={styles.parrafo}>{parrafo12}</p>
   </div>
 )}
 {parrafo13 && (
   <div className="d-flex">
     <MdArrowOutward className={styles.icon} />
     <p className={styles.parrafo}>{parrafo13}</p>
   </div>
 )}
 {parrafo13 && (
  <div className="d-flex">
    <MdArrowOutward className={styles.icon} />
    <p className={styles.parrafo}>{parrafo14}</p>
  </div>
)}
    </div>
  )
}

export default TextBox;
