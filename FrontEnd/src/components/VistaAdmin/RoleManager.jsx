import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

const RolesComponent = () => {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:9000/api/roles')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los roles');
        }
        return response.json();
      })
      .then(data => {
        setRoles(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleRoleSelection = (values) => { 
    console.log('Rol seleccionado:', values.rol);
  };

  if (isLoading) {
    return <p className="text-center">Cargando roles...</p>;
  }

  if (error) {
    return <p className="text-center">Error al cargar roles: {error}</p>;
  }

  return (
    <div className="roles-container">
      <h1 className="roles-title">Roles dentro del sistema</h1>
      <Formik
        initialValues={{ rol: '' }}
        onSubmit={handleRoleSelection}
      >
        {() => (
          <Form className="roles-form">
            {roles.map(rol => (
              <label key={rol._id} className="roles-label">
                <Field type="radio" name="rol" value={rol._id} />
                {rol.name}
              </label>
            ))}
            <button type="submit" className="btn-roles">Confirmar selección</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RolesComponent;