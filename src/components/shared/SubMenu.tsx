'use client'


import Link from "next/link";
import styles from './subMenu.module.css';
import { useState } from "react";



function SubMenu() {
    const [activeLink, setActiveLink] = useState('personas');

    const handleLinkClick = (linkId: string) => {
        setActiveLink(linkId);
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };



    return (
        <ul className={styles.subMenu}>

            <li >
                <Link
                    href="/personas"
                    className={`${styles.link} ${activeLink === 'personas' ? styles.activeLink : ''}`}
                    onClick={() => handleLinkClick('personas')}
                >Auto</Link>
            </li>
            <li>
                <Link
                    href="/personas/moto"
                    className={`${styles.link} ${activeLink === 'moto' ? styles.activeLink : ''}`}
                    onClick={() => handleLinkClick('moto')}
                >Moto</Link>
            </li>
            <li>
                <Link
                    href="/personas/movilidad-urbana"
                    className={`${styles.link} ${activeLink === 'movilidad-urbana' ? styles.activeLink : ''}`}
                    onClick={() => handleLinkClick('movilidad-urbana')}
                >Movilidad Urbana</Link>
            </li>
            <li>
                <Link
                    href="/personas/hogar-y-accidentes-personales"
                    className={`${styles.link} ${activeLink === 'hogar-y-accidentes-personales' ? styles.activeLink : ''}`}
                    onClick={() => handleLinkClick('hogar-y-accidentes-personales')}
                >Hogar y accidentes personales</Link>
            </li>
            <li>
                <Link
                    href="/personas/salud"
                    className={`${styles.link} ${activeLink === 'salud' ? styles.activeLink : ''}`}
                    onClick={() => handleLinkClick('salud')}
                >Salud</Link>
            </li>
        </ul>
    );
}

export default SubMenu;