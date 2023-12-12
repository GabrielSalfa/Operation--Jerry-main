import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Aute from './components/Autenticacion/Aute';
import Liquidador from './components/Liquidador/liquidador';
import VAdmin from './components/VistaAdmin/VAdmin';
import ConsultaAsistenciaGrua from "./components/ConsultaAsistenciaGrua/consultaAsistenciaGrua";
import IngresoSin from "./components/IngresoSiniestro/IngresoSin";
import ConsultarSiniestrosForm  from './components/Siniestro/Sini';
import ProtectedRoute from './components/router/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Rutas publicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/autenticacion" element={<Aute />} />
          {/* Falta hacer rutas privadas segun roles */}
          <Route element={<ProtectedRoute roles={['Analista Negocio']} />}>
            <Route path="/Vistaadmin/*" element={<VAdmin />} />
          </Route>
          {/*LEEEME */}
          <Route element={<ProtectedRoute roles={['Analista Siniestro']} />}>
            <Route path="/consultaAsistenciagrua" element={<ConsultaAsistenciaGrua/>} />
            </Route>
          <Route path="/IngresoSiniestro" element={<IngresoSin/>}/>
          <Route path="/consultarSiniestro" element={<ConsultarSiniestrosForm/>}/>
          <Route path="/Liquidador" element={<Liquidador/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;