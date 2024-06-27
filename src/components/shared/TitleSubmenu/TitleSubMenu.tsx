import React, { FC } from 'react'
import styles from './titleSubMenu.module.css';
import { Container } from 'react-bootstrap';



    interface titleSubMenuProps {
        text: string;
      }

      const TitleSubMenu: FC<titleSubMenuProps> = ({ text }) =>{
    return (
        <div className={styles.titleSubMenu}>
            <Container>
                <h6>{text}</h6>
            </Container>
        </div>
    )
}


export default TitleSubMenu