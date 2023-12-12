import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import CrearUsuario from './crear-usuario';
import AdministrarUsuarios from './administrar-usuarios';
import './VAdmin.css';
const VAdmin = () => {
    return (
        <div>
            <AdminNavBar />
            <Routes>
                <Route path="crear-usuario" element={<CrearUsuario />} />
                <Route path="administrar-usuarios" element={<AdministrarUsuarios />} />
            </Routes>
        </div>
    );
};

export default VAdmin;
