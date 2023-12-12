import React from 'react';
import { Link } from 'react-router-dom';
import Slider from './MaximumSlider'; // Importamos el componente Slider
import './diseñoIni.css';

const Inicio = () => {
    // Puedes definir tus imágenes aquí o traerlas de props o un contexto si es necesario
    const images = [
        'https://www.milapuntocom.com/wp-content/uploads/2017/12/large-64.jpg',
        'https://www.eleconomista.com.mx/__export/1522807288195/sites/eleconomista/img/2018/04/03/fp_princi_aseguradora_040418.png_1902800913.png',
        'https://i0.wp.com/chocale.cl/wp-content/uploads/2022/03/copia-poliza-soap.jpg?resize=800%2C500&ssl=1'
    ];

    return (
        <div className='Contenedor'>
            <nav className='BarraDeNav'>
                <div className='NavBotones'>
                    <Link to="/autenticacion" className='BotonNav'>Iniciar Sesión Empleado</Link>
                    <Link to="/consultar-siniestro" className='BotonNav'>Consultar Siniestro</Link>
                </div>
            </nav>

            <h1 className = 'Titular'>Bienvenido a nuestro Sistema de Siniestros</h1>
            <Slider images={images} /> {/* Aquí se utiliza el componente Slider */}
            <h2>Sobre Nuestro Equipo</h2>
            <article className='Integrantes'>
                <img src="https://i.ytimg.com/vi/JvOGANs3hYI/oar2.jpg" alt="" />
                <p>Mati</p>
                <p>Me gusto el BackEnd</p>
            </article>
            <article className='Integrantes'>
                <img src="https://media.tenor.com/ieXO0Ui-EoMAAAAC/skull-explode.gif" alt="calaca explosiva.gif" />
                <p>Beros</p>
                <p>El diseño gráfico es mi pasión</p>
            </article>
            <article className='Integrantes'>
                <img src="https://media1.tenor.com/m/GswMX5LWizcAAAAC/susie-deltarune-deltarune.gif" alt="Susie.gif" />
                <p>Garry</p>
                <p>Error 404.</p>
            </article>
            <article className='Integrantes'>
                <img id="imgLiq" src="warr.png" alt="" />
                <p>Kris</p>
                <p>"Alo?"</p>
            </article>

        </div>
    );
};

export default Inicio;