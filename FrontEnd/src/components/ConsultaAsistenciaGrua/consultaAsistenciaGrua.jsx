import React, { useState } from 'react';
import './consultaAsistenciaGrua.css';

const ConsultaAsistenciaGrua = () => {
    const [showGlobalStats, setShowGlobalStats] = useState(false);
    const [numeroSiniestro, setNumeroSiniestro] = useState('');
    const [data, setData] = useState(null);

    const handleConsultasStuff = (values) => {
        const token = localStorage.getItem('token');
        fetch(`http://localhost:9000/api/gruas/${numeroSiniestro}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                alert("No se encontró el siniestro especificado.");
            });
    }
    return (
        <div>
            {/* Barra de navegación */}
            <div className="utility">
                <nav className="Nav-Principal contenedor">
                    <a href="#">Inicio</a>
                    <a href="#">Sobre Mi</a>
                    <a href="#">Clientes</a>
                    <a href="#">Contacto</a>
                </nav>
            </div>
            {/* Más cositas */}

            <div className="Informacion-Consulta-Asistencia">
                {/* Este botón tiene modificaciones adicionales para cambiar el tamaño */}
                <button className="Cool-Button Datos-Consulta-Asistencia" style={{ width: 100, fontSize: '10px', padding: '0.3rem', display: 'flex', alignItems: 'center' }}>
                    <img className="Icono" src="https://cdn-icons-png.flaticon.com/512/3545/3545435.png" alt="Volver" />
                    Volver
                </button>

                <label>
                    Numero de Siniestro:
                    <input
                        type="text"
                        value={numeroSiniestro}
                        onChange={(e) => setNumeroSiniestro(e.target.value)}
                    />
                </label>

                <button onClick={handleConsultasStuff}>Fetch Data</button>


            </div>

            {/* Visualización de los datos */}
            {data &&
                <table className="Visualizacion-Datos-Grua">
                    <thead>
                    <tr>
                        <td>
                            <h2>Asistido por:</h2>
                        </td>
                        <td>
                            <h2 id="grua-nombre">{data.taller}</h2>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Patente:</td>
                        <td id="grua-patente">{data.patentG}</td>
                    </tr>
                    <tr>
                        <td>Chofer:</td>
                        <td id="grua-chofer">{data.chofer}</td>
                    </tr>
                    <tr>
                        <td>Punto de retiro</td>
                        <td id="grua-retiro">{data.punto_retiro}</td>
                    </tr>
                    <tr>
                        <td>Punto de destino</td>
                        <td id="grua-destino">{data.taller}</td>
                    </tr>
                    </tbody>
                </table>
            }
            <footer className='footerAG'></footer>
        </div>
    )
}

export default ConsultaAsistenciaGrua;