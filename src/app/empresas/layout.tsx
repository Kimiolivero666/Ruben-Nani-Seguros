// app/personas/layout.tsx
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './empresas.module.css';
import SubMenuEmpresas from '@/components/shared/SubMenuEmpresas';

const EmpresasLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className={styles.empresas}>
        <Container>
          <h1 className={styles.title}>Empresas</h1>
          <div className="pb-3">
          <SubMenuEmpresas />
          </div>
         
        </Container>
      </section>
      {children}

    </>
  );
};

export default EmpresasLayout;
