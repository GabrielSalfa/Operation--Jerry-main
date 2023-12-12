import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Modal = ({ empleado, cerrarModal, onSubmit, roles = [] }) => {
    const empleadoSchema = Yup.object().shape({
        username: Yup.string().required('El nombre de usuario es obligatorio'),
        password: Yup.string(),
        rol: Yup.string().required('El rol es obligatorio'),
    });

    return (
        <div className="modal">
            <Formik
                initialValues={{
                    username: empleado.username || '',
                    password: '', // La contraseña inicialmente está vacía
                    rol: empleado.rol ? empleado.rol._id : ''
                }}
                validationSchema={empleadoSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const updateValues = {
                        username: values.username,
                        rol: values.rol,
                        ...(values.password && { password: values.password }),
                    };

                    onSubmit(empleado._id, updateValues); 
                    setSubmitting(false);
                    cerrarModal();
                }}
            >
                {({ errors, touched }) => (
                    <Form autoComplete='off'>
                        <h2 className='TituloModal'>Actualizar Empleado</h2>
                        <div className='DivModal'>
                            <Field className='campoField' name="username" type="text" placeholder="Nombre de Usuario" />
                            {errors.username && touched.username && <div>{errors.username}</div>}
                        </div>
                        <div className='DivModal'>
                            <Field className='campoField' name="password" type="password" placeholder="Nueva contraseña" />
                        </div>
                        <div className='DivModal'>
                            <p className='LabelModal'>Rol:</p>
                            {roles.map((rol) => (
                                <div key={rol._id} className="radio-group">
                                    <Field className='radio-button' type="radio" name="rol" value={rol._id} />
                                    <label className="radio-label">{rol.name}</label>
                                </div>
                            ))}
                        </div>
                        <button className='BtnnModal'  type="submit">Actualizar</button>
                        <button  className='BtnnModal' type="button" onClick={cerrarModal}>Cancelar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Modal;

  