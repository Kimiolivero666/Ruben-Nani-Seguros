import React from 'react';
import { Table } from 'react-bootstrap';
import { RiCloseLargeFill } from "react-icons/ri";
import { FaCheck } from 'react-icons/fa';
import styles from './DataTable.module.css'; // Importar estilos personalizados

const DataTable = () => {
    // Ejemplo de datos
    const data = [
        { id: 'Resp. Civil: Daños a cosas no transportadas de terceras personas', A: '', B: '', C: '', D:'', E:'', F:'', G:'' },
        { id: 'Resp. Civil: Lesiones y/o muerte de terceras personas no transportadas', A: '', B: '', C: '', D:'', E:'', F:'', G:'' },
        { id: 'Resp. Civil: Lesiones y/o muerte de terceras personas transportadas',  A: '', B: '', C: '', D:'', E:'', F:'', G:'' },
        { id: 'Transporte de Combustibles', A: 'rojo', B: 'rojo', C: 'rojo', D:'rojo', E:'rojo', F:'rojo', G:'rojo' },
        { id: 'Daño Ambiental',  A: 'rojo', B: 'rojo', C: 'rojo', D:'rojo', E:'rojo', F:'rojo', G:'rojo' },
        { id: 'Gastos de Remediación Ambiental', A: 'rojo', B: 'rojo', C: 'rojo', D:'rojo', E:'rojo', F:'rojo', G:'rojo'},
        { id: 'Gastos de Remediación Ambiental y Daño Ambiental', A: 'rojo', B: 'rojo', C: 'rojo', D:'rojo', E:'rojo', F:'rojo', G:'rojo' },
        { id: 'Llamando al Doctor ',  A: '', B: '', C: '', D:'', E:'', F:'', G:'' },
        { id: 'Asistencia Legal',  A: '', B: '', C: '', D:'', E:'', F:'', G:'' },
        { id: 'Muerte Accidental',  A: '', B: '', C: '', D:'', E:'', F:'', G:'' },
        { id: 'nvalidez Total y/o Parcial Permanente por Accidente',  A: '', B: '', C: '', D:'', E:'', F:'', G:'' },
        { id: 'Asistencia Médico Farmacéutica', A: '', B: '', C: '', D:'', E:'', F:'', G:''  },
        { id: 'Accidente Total', A: 'rojo', B: 'rojo', C: '', D:'rojo', E:'', F:'', G:'' },
        { id: 'Incendio Total', A: 'rojo', B: '', C: '', D:'', E:'', F:'', G:'' },
        { id: 'Incendio Parcial', A: 'rojo', B: '', C: '', D:'', E:'', F:'rojo', G:'' },
        { id: 'Robo y/o Hurto Total', A: 'rojo', B: '', C: '', D:'rojo', E:'', F:'', G:''  },
        { id: 'Robo y/o Hurto Parcial', A: 'rojo', B: '', C: '', D:'rojo', E:'', F:'rojo', G:'' },
        { id: 'Huelga, Lock-out o Tumulto Popular',  A: 'rojo', B: 'rojo', C: '', D:'rojo', E:'', F:'rojo', G:'' },
        { id: 'Asistencia al Vehículo y Personas',  A: 'rojo', B: '', C: '', D:'', E:'', F:'', G:'' },
        { id: 'Granizo',  A: 'rojo', B: 'rojo', C: '', D:'rojo', E:'', F:'rojo', G:'' },
        { id: 'Terremoto',  A: 'rojo', B: 'rojo', C: '', D:'rojo', E:'', F:'rojo', G:'' },
        { id: 'Inundación',  A: 'rojo', B: 'rojo', C: '', D:'rojo', E:'', F:'rojo', G:'' },
        { id: 'Rotura o Reparación de Cristales',  A: 'rojo', B: 'rojo', C: 'rojo', D:'rojo', E:'', F:'rojo', G:'' },
        { id: 'Accidentes Personales',A: 'rojo', B: 'rojo', C: 'rojo', D:'rojo', E:'', F:'rojo', G:''  },
        { id: 'Roturas de Cerraduras por Robo e Intento de Robo', A: 'rojo', B: 'rojo', C: 'rojo', D:'rojo', E:'', F:'rojo', G:''  },
        { id: 'Gastos de Gestoría', A: 'rojo', B: 'rojo', C: 'rojo', D:'rojo', E:'', F:'rojo', G:''  },
        { id: 'Daños Parciales sin Deducible al Amparo de Robo Total', A: 'rojo', B: 'rojo', C: 'rojo', D:'rojo', E:'', F:'rojo', G:''  },
    ];

    // Función para verificar el nombre y devolver el icono correspondiente
    const getIconByNombre = (nombre:string) => {
        if (nombre === 'rojo') {
            return <RiCloseLargeFill style={{ color: 'red' }} />; 
        } else {
            return <FaCheck style={{ color: 'green' }} />;
        }
    };

    return (
        
        <Table striped bordered hover responsive className={styles.tableCustom}>
            <thead>
                <tr>
                    <th style={{ color: 'var(--azul)'  }}>COBERTURA</th>
                    <th style={{ color: 'var(--azul)'  }}>A</th>
                    <th style={{ color: 'var(--azul)'  }}>B</th>
                    <th style={{ color: 'var(--azul)'  }}>C</th>
                    <th style={{ color: 'var(--azul)'  }}>D</th>
                    <th style={{ color: 'var(--azul)'  }}>E</th>
                    <th style={{ color: 'var(--azul)'  }}>F</th>
                    <th style={{ color: 'var(--azul)'  }}>G</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td style={{ color: 'var(--azul)' }}>{row.id}</td>
                        <td>{getIconByNombre(row.A)}</td>
                        <td>{getIconByNombre(row.B)}</td>
                        <td>{getIconByNombre(row.C)}</td>
                        <td>{getIconByNombre(row.D)}</td>
                        <td>{getIconByNombre(row.E)}</td>
                        <td>{getIconByNombre(row.F)}</td>
                        <td>{getIconByNombre(row.G)}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default DataTable;
