"use client"

import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import styles from './NavbarMenu.module.css';
import Link from 'next/link';

const NavbarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('inicio');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
    closeMenu();
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [menuOpen]);

  return (
    <nav className={`${styles.navbar} fixed-top`}>
      <Container>
        <div className={styles.navbarContenedor}>
          <div className={styles.brand}>
            <a href="/" className={styles.textWhite}>
              Rubén Fernando Nani
            </a>
          </div>
          <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
            <div className={styles.menuBox}>
              <Link
                href="/"
                className={`${styles.firstLink} ${activeLink === 'inicio' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('inicio')}
              >
                Inicio
              </Link>
              <Link
                href="/personas"
                className={`${styles.linkMenu} ${activeLink === 'Personas' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('Personas')}
              >
                Personas
              </Link>
              <Link
                href="/empresas"
                className={`${styles.linkMenu} ${activeLink === 'Empresas' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('Empresas')}
              >
                Empresas
              </Link>
              <Link
                href="/bancoDelSol"
                className={`${styles.linkMenu} ${activeLink === 'Banco del Sol' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('Banco del Sol')}
              >
                Banco del Sol
              </Link>
              <Link
                href="/nosotros"
                className={`${styles.linkMenu} ${activeLink === 'Nosotros' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('Nosotros')}
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className={`${styles.linkMenu} ${activeLink === 'Contacto' ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick('Contacto')}
              >
                Contacto
              </Link>
            </div>
          </div>



          {menuOpen ? (
            <AiOutlineClose className={styles.iconBars} onClick={toggleMenu} />
          ) : (
            <FaBars className={styles.iconBars} onClick={toggleMenu} />
          )}
        </div>
      </Container>
    </nav>
  );
};

export default NavbarMenu;
