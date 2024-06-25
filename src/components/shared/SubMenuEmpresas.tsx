'use client';

import Link from "next/link";
import styles from './subMenuEmpresas.module.css';
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

function SubMenuEmpresas() {
    const [activeLink, setActiveLink] = useState('empresas');
    const pathname = usePathname(); // Obtiene la ruta actual
    const searchParams = useSearchParams(); // Obtiene los parámetros de búsqueda actuales

    const handleLinkClick = (linkId: string) => {
        setActiveLink(linkId);
    };

    useEffect(() => {
        // Desplazarse hacia la parte superior después de un cambio de ruta
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname, searchParams]); // Ejecutar cuando la ruta o los parámetros cambien

    return (
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
    );
}

export default SubMenuEmpresas;
