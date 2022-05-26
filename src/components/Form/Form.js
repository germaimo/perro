import React from 'react'
import styles from './Form.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formu = () => (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Requerido';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Mail invalido';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles['columna-1']}>
                
                <div className={styles['inputs-3']}> 
                    <Field type="text" name="name" placeholder='Nombre' />
                    <ErrorMessage name="name" component="div" />    

                    <div>
                        <Field type="email" name="email" placeholder='E-mail' />
                        <ErrorMessage name="email" component="div" className={styles['requiered-warning']} />
                    </div>

                    <Field type="text" name="subject" placeholder='Asunto' />
                    <ErrorMessage name="subject" component="div" />

                </div>
                
                <div className={styles['textarea-div']}>
                    <Field name="message" component="textarea" placeholder='Mensaje'/>
                    <ErrorMessage name="message" component="div" />
                </div>
            </div>
            
            <div className={styles['columna-2']}>
                <button type="submit" disabled={isSubmitting}>
                ↪️ Submit
                </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );

export default Formu