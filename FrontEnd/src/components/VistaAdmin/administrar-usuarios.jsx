import React, { useState, useEffect } from 'react';
import './diseñoTablaAdmin.css';
import Modal from './Modal';

const ListaEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [menuActivo, setMenuActivo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [empleadoParaEditar, setEmpleadoParaEditar] = useState(null); // Estado para el empleado a editar
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/roles')
      .then(response => response.json())
      .then(data => setRoles(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const mostrarOcultarMenu = (id) => {
    setMenuActivo(menuActivo === id ? null : id);
  };
  const abrirModalEditar = (empleado) => {
    console.log("Abriendo modal para editar:", empleado);
    setEmpleadoParaEditar(empleado); // Corrige esto para usar setEmpleadoParaEditar
    setShowModal(true);
  };
  const eliminarEmpleado = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este empleado?')) {
      const token = localStorage.getItem('token');
      fetch(`http://localhost:9000/api/employs/${id}`, {
        method: 'DELETE',
        headers: {
          'x-access-token': token
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al eliminar el empleado');
        }
        return response.json();
      })
      .then(() => {
        setEmpleados(empleados.filter(empleado => empleado._id !== id));
      })
      .catch(error => {
        console.error('Hubo un error eliminando al empleado:', error);
      });
    }
  };
  const actualizarEmpleado = (id, datosActualizados) => {
    const token = localStorage.getItem('token');
    console.log("ID del empleado a actualizar:", id);
  
    fetch(`http://localhost:9000/api/employs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(datosActualizados)
    })
    .then(response => {
      if (!response.ok) {
        // Convertiremos el error en texto para poder mostrarlo
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        // Si hay un error en los datos, se lanza para que el bloque catch lo capture
        throw new Error(data.message);
      }
  
      // Actualiza el estado solo si la actualización fue exitosa
      setShowModal(false);
      const updatedEmpleados = empleados.map(emp => {
        if (emp._id === id) {
          // Actualiza los datos del empleado con la respuesta del servidor
          return { ...emp, ...data.employ };
        }
        return emp;
      });
      setEmpleados(updatedEmpleados);
    })
    .catch(error => {
      console.error('Error actualizando empleado:', error);
    });
  };

  useEffect(() => {
    const cerrarMenu = (e) => {
      if (menuActivo && !e.target.closest('.acciones')) {
        setMenuActivo(null);
      }
    };
  
    document.addEventListener('mousedown', cerrarMenu);
    return () => {
      document.removeEventListener('mousedown', cerrarMenu);
    };
  }, [menuActivo]);

  useEffect(() => {
    fetch('http://localhost:9000/api/employs')
      .then(response => response.json())
      .then(data => setEmpleados(data))
      .catch(error => console.error('Error:', error));
  }, []);
  
  return (
    <div>
      <h1 className='TituloTabla'>Lista de Empleados</h1>
      <table className='tablaEmploys'>
        <thead className='CtablaEmploys'>
          <tr>
            <th>Username</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className='CuerpoTEmploys'>
          {empleados.map((empleado) => (
            <tr key={empleado._id}>
              <td>{empleado.username}</td>
              <td>{empleado.rol ? empleado.rol.name : 'Sin Rol'}</td>
              <td>
                <div className="acciones">
                  <button onClick={() => mostrarOcultarMenu(empleado._id)}className="boton-acciones">...</button>
                  {menuActivo === empleado._id && (
                    <div className="menu-acciones">
                      <button type="button" onClick={() => eliminarEmpleado(empleado._id)}>Eliminar empleado</button>
                      <button type="button" onClick={() => abrirModalEditar(empleado)}>Editar empleado</button>
                    </div>
                  )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {empleadoParaEditar && (
          <Modal
            empleado={empleadoParaEditar}
            cerrarModal={() => { setEmpleadoParaEditar(null); setShowModal(false); }}
            onSubmit={actualizarEmpleado}
            roles={roles} // Pasar los roles al Modal
          />
        )}
      </div>
    );
  };


export default ListaEmpleados;