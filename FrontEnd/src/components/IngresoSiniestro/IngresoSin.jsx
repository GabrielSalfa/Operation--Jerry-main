import React, { useState } from "react";
import axios from "axios";

function IngresoSin() {
  const [formData, setFormData] = useState({
    rutOwner: "",
    policyNumber: "",
    liquidator_name: "",
    date: "",
    workshop_assign: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/api/accidents",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data); // Manejar la respuesta del servidor
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div>
      <header>
        <div className="menu">
          <a href="#Inicio" className="inactivo">
            Inicio
          </a>
          <span style={{ marginLeft: "20px" }}></span>
          <a href="#Ingreso de usuario" className="inactivo">
            Ingreso de usuario
          </a>
          <span style={{ marginLeft: "20px" }}></span>
          <a href="#Consulta de siniestros" className="inactivo">
            Consulta de siniestros
          </a>
        </div>
        <h1>
          <center>INGRESO DE SINIESTRO</center>
        </h1>
        <br />
      </header>
      <br />
      <br />
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <center>
            <label htmlFor="rutOwner">RUT del Propietario:</label>
            <input
              type="text"
              id="rutOwner"
              name="rutOwner"
              onChange={handleInputChange}
              required
            />
          </center>
          <br />
          <center>
            <label htmlFor="policyNumber">Número de Póliza:</label>
            <input
              type="text"
              id="policyNumber"
              name="policyNumber"
              onChange={handleInputChange}
              required
            />
          </center>
          <br />
          <center>
            <label htmlFor="liquidator_name">Nombre del Liquidador:</label>
            <input
              type="text"
              id="liquidator_name"
              name="liquidator_name"
              onChange={handleInputChange}
              required
            />
          </center>
          <br />
          <center>
            <label htmlFor="date">Fecha:</label>
            <input
              type="date"
              id="date"
              name="date"
              onChange={handleInputChange}
              required
            />
          </center>
          <br />
          <center>
            <label htmlFor="workshop_assign">Taller Asignado:</label>
            <input
              type="text"
              id="workshop_assign"
              name="workshop_assign"
              onChange={handleInputChange}
              required
            />
          </center>
          <br />
          <center>
            <button type="submit" id="boton1">
              Ingresar siniestro
            </button>
          </center>
        </form>
      </div>
      <br />
      <br />
      <br />
      <img
        src="../../../../../../../../../Downloads/Ingreso%20de%20siniestro/icono-siniestro.png"
        width="50"
        height="50"
      />
      <br />
      <br />
      <footer className="footerIngresoSini">
        <center>
          <h5>Página ingreso de siniestro 1.0</h5>
          <br />
        </center>
      </footer>
    </div>
  );
}

export default IngresoSin;
