import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from 'react-bootstrap/Button'
import * as Yup from 'yup'

// Validamos los campos
const SignupSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, 'Muy Corto!')
    .max(50, 'Muy Largo!')
    .required('Requerido'),
  apellido: Yup.string()
    .min(2, 'Muy Corto!')
    .max(50, 'Muy Largo!')
    .required('Requerido'),
  email: Yup.string().email('Email Inválido').required('Requerido')
})

// Formulario
export const Formulario = () => {
  const [usuarios, setusuarios] = useState([])

  return (
    <div>
      <div className='formulario'>
        <h2 className='titulo'>Prueba 1</h2>
        <Formik
          initialValues={{ nombre: '', apellido: '', email: '' }}
          validationSchema={SignupSchema}
          
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setusuarios([...usuarios, values])
            setSubmitting(false)
            resetForm()
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='form-group'>
                <label htmlFor='nombre'>Nombre</label>
                <Field type='text' name='nombre' className='form-control' />
                <ErrorMessage
                  name='nombre'
                  component='div'
                  className='text-danger'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='apellido'>Apellido</label>
                <Field type='text' name='apellido' className='form-control' />
                <ErrorMessage
                  name='apellido'
                  component='div'
                  className='text-danger'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Correo</label>
                <Field type='email' name='email' className='form-control' />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-danger'
                />
              </div>
              <Button type='submit' variant='primary' disabled={isSubmitting}>
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <section className='formulario'>
        <h2>Personas Ingresadas:</h2>
        <ul>
          {usuarios.map((value, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {value.nombre} <br />
              <strong>Apellido:</strong> {value.apellido} <br />
              <strong>Email:</strong> {value.email}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Formulario
