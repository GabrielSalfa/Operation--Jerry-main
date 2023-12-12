import React from "react";
import { Link } from "react-router-dom";


const AdminNavBar = () => {
    return (
        <div className="BarraDeNav">
            <nav className="NavAdmin">
                <ul>
                    <li>
                        <Link to="crear-usuario">Crear usuario</Link>
                    </li>
                    <li>
                        <Link to="administrar-usuarios">Administrar usuarios</Link>
                    </li>
                        
                </ul>
            </nav>
        </div>
    )
};

export default AdminNavBar;