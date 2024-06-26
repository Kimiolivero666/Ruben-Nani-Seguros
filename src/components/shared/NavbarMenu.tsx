"use client";

import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import styles from "./NavbarMenu.module.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavbarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("inicio");
  const pathname = usePathname();

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
    // Sincronizar activeLink con la ruta actual
    const currentRoute = pathname === '/' ? 'inicio' : pathname.slice(1);
    setActiveLink(currentRoute);

    if (menuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [pathname, menuOpen]);

  return (
    <nav className={`${styles.navbar} fixed-top`}>
      <Container>
        <div className={styles.navbarContenedor}>
          <div className={styles.brand}>
            <Link href="/" className={styles.textWhite}>
              Rubén Fernando Nani
            </Link>
          </div>
          <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
            <div className={styles.menuBox}>
              <Link
                href="/"
                className={`${styles.firstLink} ${activeLink === "inicio" ? styles.activeLink : ""}`}
                onClick={() => handleLinkClick("inicio")}
              >
                Inicio
              </Link>
              <Link
                href="/personas"
                className={`${styles.linkMenu} ${activeLink === "personas" ? styles.activeLink : ""}`}
                onClick={() => handleLinkClick("personas")}
              >
                Personas
              </Link>
              <Link
                href="/empresas"
                className={`${styles.linkMenu} ${activeLink === "empresas" ? styles.activeLink : ""}`}
                onClick={() => handleLinkClick("empresas")}
              >
                Empresas
              </Link>
              <Link
                href="/bancoDelSol"
                className={`${styles.linkMenu} ${activeLink === "bancoDelSol" ? styles.activeLink : ""}`}
                onClick={() => handleLinkClick("bancoDelSol")}
              >
                Banco del Sol
              </Link>
              <Link
                href="/nosotros"
                className={`${styles.linkMenu} ${activeLink === "nosotros" ? styles.activeLink : ""}`}
                onClick={() => handleLinkClick("nosotros")}
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className={`${styles.linkMenu} ${activeLink === "contacto" ? styles.activeLink : ""}`}
                onClick={() => handleLinkClick("contacto")}
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
