import React, { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import "./probando.css";

const Liquidador = () => {
  const [accident, setAccident] = useState("");
  const [agency, setAgency] = useState("");
  const [tow, setTow] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [repairt, setRepairt] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [deliver, setDeliver] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const doc = new jsPDF();
      doc.text("Contenido del PDF", 10, 10);
      doc.save("liquidator.pdf");
      const response = await axios.post("http://localhost:3000/api/liquidator", {
        accident,
        agency,
        tow,
        workshop,
        repairt,
        time,
        desc,
        deliver,
        cost,
      }
      );
      console.log(response.data); // Aquí puedes manejar la respuesta del servidor

      // Restablecer los estados después del envío exitoso
      setAccident("");
      setAgency("");
      setTow("");
      setWorkshop("");
      setRepairt("");
      setTime("");
      setDesc("");
      setDeliver("");
      setCost("");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="BodyLiqu" onSubmit={handleSubmit}>
      <center>
        <h1 id="title1">Liquidador: Ernesto Jorquera</h1>
      </center>
      <center>
        <div id="cont">
          <label for="accident">Siniestro:</label>
          <select id="deliv">
            <option disabled selected>
              Seleccione el Siniestro
            </option>
            <option value="E. Rigoberto 10/09">E. Rigoberto 10/09</option>
            <option value="M. Fuenzalida 25/05">M. Fuenzalida 25/05</option>
            <option value="P. Rodríguez 08/01">P. Rodríguez 08/01</option>
            <option value="U. Saavedra 01/02">U. Saavedra 01/02</option>
            <option value="J. José 30/12">J. José 30/12</option>
          </select>
        </div>
      </center>

      <div id="sinadm">
        <div>
          <center>
            <h2>Gestión de Siniestro</h2>
          </center>
        </div>

        <form>
          <center>
            <label for="agency">Agencia:</label>
            <select id="agency">
              <option disabled selected>
                Escoja una Agencia
              </option>
              <option value="Reparaciones Rueda">Reparaciones Rueda</option>
              <option value="Autofix">Autofix</option>
              <option value="GasoBing">GasoBing</option>
            </select>
            <br></br>
            <br></br>
            <label for="tow">Grúa:</label>
            <select id="tow" type="text" name="tow">
              <option disabled selected>
                Escoja una Grúa
              </option>
              <option value="FIRU23">FIRU23</option>
            </select>
            <br></br>
            <br></br>
            <label for="workshop">Taller:</label>
            <select id="workshop" type="text" name="workshop">
              <option disabled selected>
                Escoja un Taller
              </option>
              <option value="El Taller de tus sueños">
                El Taller de tus sueños
              </option>
            </select>
            <br></br>
            <br></br>
            <label for="repair">Tipo de Reparación:</label>
            <select id="repair">
              <option disabled selected>
                Tipo de Reparación
              </option>
              <option value="Menor">Menor</option>
              <option value="Moderada">Moderada</option>
              <option value="Completa">Completa</option>
            </select>
            <br></br>
            <br></br>
            <label for="time">Tiempo Estimado:</label>
            <input id="time" type="text" name="time"></input>
            <br></br>
            <br></br>
            <center>
              <label for="desc">Descripción:</label>
              <input id="desc" type="text" name="desc"></input>
            </center>
            <br></br>
            <label for="deliver">Día de Entrega:</label>
            <input id="deliver" type="text" name="day"></input>
            <br></br>
            <br></br>
            <label for="cost">Monto Total:</label>
            <input id="cost" type="text" name="cost"></input>
            <br></br>
            <br></br>
            <center>
              <button type="submit" id="download">Descargar PDF</button>
              <br></br>
              <br></br>
              <img
                src="https:vinculacion.unab.cl/wp-content/uploads/2018/06/fondo-transparente-logo-color-con-texto-blanco-y-3-palabras.png"
                id="unab"
                alt="unab"
              ></img>
              <br></br>
              <center>
                <h3>Administración de Siniestro v0.5</h3>
              </center>
            </center>
          </center>
        </form>
      </div>
    </div>
  );
};
export default Liquidador;