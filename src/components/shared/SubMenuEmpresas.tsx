'use client';

import Link from "next/link";
import styles from './subMenuEmpresas.module.css';
import { useEffect, useState } from "react";

// importacion de arrow
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


function SubMenuEmpresas() {
    const [activeLink, setActiveLink] = useState('empresas');
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
                            href="/empresas"
                            className={`${styles.link} ${activeLink === 'empresas' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('empresas')}
                        >Auto</Link>
                    </li>
                    <li>
                        <Link
                            href="/empresas/moto"
                            className={`${styles.link} ${activeLink === 'moto' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('moto')}
                        >Moto</Link>
                    </li>
                    <li>
                        <Link
                            href="/empresas/camiones-y-maquinas-viales"
                            className={`${styles.link} ${activeLink === 'camiones-y-maquinas-viales' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('camiones-y-maquinas-viales')}
                        >Camiones y máquinas</Link>
                    </li>
                    <li>
                        <Link
                            href="/empresas/salud"
                            className={`${styles.link} ${activeLink === 'salud' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('salud')}
                        >Salud</Link>
                    </li>
                    <li>
                        <Link
                            href="/empresas/integrales"
                            className={`${styles.link} ${activeLink === 'integrales' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('integrales')}
                        >Integrales</Link>
                    </li>
                    <li>
                        <Link
                            href="/empresas/art"
                            className={`${styles.link} ${activeLink === 'art' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('art')}
                        >ART</Link>
                    </li>
                    <li>
                        <Link
                            href="/empresas/transporte"
                            className={`${styles.link} ${activeLink === 'transporte' ? styles.activeLink : ''}`}
                            onClick={() => handleLinkClick('transporte')}
                        >Transporte</Link>
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

export default SubMenuEmpresas;
