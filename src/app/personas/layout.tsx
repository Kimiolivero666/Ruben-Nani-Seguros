// app/personas/layout.tsx
import React from 'react';
import { Container } from 'react-bootstrap';
import SubMenu from '@/components/shared/SubMenu';
import styles from './personas.module.css';

const PersonasLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className={styles.personas}>
        <Container>
          <h1 className={styles.title}>Personas</h1>
          <div className="pb-3">
          <SubMenu />
          </div>
         
        </Container>
      </section>
      {children}


    </>
  );
};

export default PersonasLayout;
