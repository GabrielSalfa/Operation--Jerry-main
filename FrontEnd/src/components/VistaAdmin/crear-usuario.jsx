import React, { useState, useEffect } from 'react';
import { Form, Field, Formik } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as Yup from 'yup';
import './crearusuario.css';

const CrearUsuario = () => {
  const [roles, setRoles] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('El nombre de usuario es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
    rol: Yup.string().required('El rol es requerido')
  });

  useEffect(() => {
    fetch('http://localhost:9000/api/roles')
      .then(response => response.json())
      .then(data => setRoles(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSubmitCreacionUser = (values, formikBag) => {
  const token = localStorage.getItem('token');
  fetch('http://localhost:9000/api/employs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    body: JSON.stringify({
      username: values.username,
      password: values.password,
      rol: values.rol 
    })
  })
  .then(response => response.json()) // Primero convierte la respuesta en JSON
  .then(data => {
    if(data.message) { // Suponiendo que 'message' es una propiedad enviada por tu backend
      console.log("Respuesta del servidor: ", data.message);
      // Si necesitas verificar si el mensaje es de éxito puedes hacerlo aquí
      if (data.message.includes('éxito')) {
        // Lógica para manejar un empleado creado con éxito
      } else {
        // Lógica para manejar cualquier otra respuesta
      }
    }
    formikBag.resetForm();
  })
  .catch(error => {
    console.error("Error al enviar la solicitud: ", error);
  });
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="crear-usuario-container">
      <h1 className="titulo-creacion">Formulario de Registro de Empleados</h1>
      <Formik
        initialValues={{ username: '', password: '', rol: '' }}
        onSubmit={handleSubmitCreacionUser}
        validationSchema={validationSchema}
      >
        <Form className="formulario-creacion" autoComplete='off'>
          <div className="form-group">
            <label className="labelAute" htmlFor="username">Nombre de Usuario:</label>
            <Field className="form-input" type="text" id="username" name="username" required />
          </div>

          <div className="form-group password-container">
            <label className="labelAute" htmlFor="password">Contraseña:</label>
            <div className="input-wrapper">
              <Field className="form-input" type={showPassword ? 'text' : 'password'} id="password" name="password" required />
              <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="form-group">
              <label className="labelAute">Rol:</label>
              {roles.map(rol => (
                <label key={rol._id} className="form-check-label">
                  <Field type="radio" name="rol" value={rol._id} className="form-check-input"/>
                  {rol.name}
                </label>
              ))}
            </div>

          <button type="submit" className="btn-admin">
            Crear Empleado
          </button>
        </Form>
      </Formik>
      <footer className='footerAute'>
        <p>Todos los derechos reservados 2023.</p>
      </footer>
    </div>
  );
};

export default CrearUsuario;