import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../App.css'
import Button from 'react-bootstrap/Button'
import * as Yup from 'yup'
import { useState } from 'react'

// Validamos los campos
const formSchema = Yup.object().shape({
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
export const Muestra = () => {
  const[usuarios,setUsuarios] = useState([]);
  return (
    <div className='Formulario'>
      <Formik
        initialValues={{ nombre: '', apellido: '', email: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log('Form data', values)
          setUsuarios([...usuarios, values])
          setSubmitting(false)
          resetForm() // Resetea el formulario después de enviarlo
        }}
        validationSchema={formSchema}
      >
        <Form className='formulario'>
          <h4>Formulario con Validacion</h4>
          <label>Nombre</label>
          <Field type='text' name='nombre' />
          <ErrorMessage name='nombre' component='div' className='text-danger' />
          <label>Apellido</label>
          <Field type='text' name='apellido' />
          <ErrorMessage
            name='apellido'
            component='div'
            className='text-danger'
          />
          <label>Correo</label>
          <Field type='email' name='email' />
          <ErrorMessage name='email' component='div' className='text-danger' />
          <Button type='submit' variant='primary'>
            Enviar
          </Button>
        </Form>
      </Formik>
      <section className='formulario'>
        <h4>Valores Iterados</h4>
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
