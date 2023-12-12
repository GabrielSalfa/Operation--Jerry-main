import React from 'react';
import { Formik, Form, Field } from 'formik';
import './Sini.css';

const ConsultarSiniestrosForm = ({ onSubmit }) => {
    return (
        <div className="pendiente">
            <div className="pendiente"> 
                <Formik
                initialValues={{ rut: '', numeroPoliza: '' }}
                onSubmit={(values, actions) => {
                    onSubmit(values);
                    actions.setSubmitting(false);
                }}
                >
                {({ isSubmitting }) => (
                    <Form autoComplete='off'>
                        <h1>Consultar Siniestro</h1>
                        <fieldset>
                        <Field name="rut" type="text" placeholder="Ingrese su RUT" />
                        </fieldset>
                        <fieldset>
                        <Field name="numeroPoliza" type="text" placeholder="Número de póliza" />
                        </fieldset>
                        <button type="submit" disabled={isSubmitting}>
                        Consultar 
                        </button>
                        <link className='volver' to="/">Volver</link>
                    </Form>
                )}
                </Formik>
            </div>
      </div>
    );
};

export default ConsultarSiniestrosForm;