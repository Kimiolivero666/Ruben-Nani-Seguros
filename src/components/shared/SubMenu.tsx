"use client"

import Link from "next/link";
import styles from './subMenu.module.css';
import { useState, useEffect } from "react";

// importacion de arrow
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function SubMenu() {
    const [activeLink, setActiveLink] = useState('personas');
    const [menuOpen, setMenuOpen] = useState(false);

    // Leer el enlace activo de localStorage al montar el componente
    useEffect(() => {
        const savedActiveLink = localStorage.getItem('activeLink');
        if (savedActiveLink) {
            setActiveLink(savedActiveLink);
        }
    }, []);

    // Guardar el enlace activo en localStorage cuando se cambia
    const handleLinkClick = (linkId: string) => {
        setActiveLink(linkId);
        localStorage.setItem('activeLink', linkId);
        setMenuOpen(false);  // Cierra el menú al hacer clic en un enlace
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Añadir o remover overflow hidden al body según el estado del menú
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);

    return (
        <nav className="position-relative">
            <div className={`${styles.subMenuBox} ${menuOpen ? styles.menuVisible : styles.menuHidden}`}>
                <ul className={styles.subMenu}>
                    <li>
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
            </div>
            {menuOpen ? (
                <FaArrowUp className={styles.barns} onClick={toggleMenu} />
            ) : (
                <FaArrowDown className={styles.barns} onClick={toggleMenu} />
            )}
        </nav>
    );
}

export default SubMenu;
