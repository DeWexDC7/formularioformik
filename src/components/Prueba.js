import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../App.css';
import Button from 'react-bootstrap/Button';

// Formulario
export const Prueba = () => {
  return (
    <div className='Formulario'>
      <Formik
        initialValues={{ nombre: '', apellido: '', email: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log('Form data', values);
          setSubmitting(false);
          resetForm(); // Resetea el formulario después de enviarlo
        }}
      >
        <Form className='formulario'>
          <h4>Mi Formulario</h4>
          <label>Nombre</label>
          <Field type='text' name='nombre' />
          <label>Apellido</label>
          <Field type='text' name='apellido' />
          <label>Correo</label>
          <Field type='email' name='email' />
          <Button type='submit' variant='primary'>
            Enviar
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
