import React from 'react'
import styles from './Form.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//📨
const Formu = () => (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
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
                
                <div> 
                    <Field type="text" name="name" placeholder='Nombre' />
                    <ErrorMessage name="name" component="div" />    

                    <Field type="email" name="email" placeholder='E-mail' />
                    <ErrorMessage name="email" component="div" />

                    <Field type="text" name="subject" placeholder='Asunto' />
                    <ErrorMessage name="subject" component="div" />
                </div>
                
                <div>
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


// const Form = () => {
//   return (
//     <div> 

//         <form>
//                 <div className={styles['columna-1']}>
//                     <div>

//                         <div className={styles['name']}>
//                             <input id="fromName" name="fromName" placeholder='Nombre' type="text"></input>

//                         </div>

//                         <div className={styles['email']}>
//                             <input id="fromEmail" name="fromEmail" placeholder='E-mail' type="email"></input>

//                         </div>

//                         <div className={styles['asunto']}>
//                             <input id="fromAsunto" name="fromAsunto" placeholder='Asunto' type="text"></input>

//                         </div>

//                     </div>

//                     <div className={styles['message']}> 
//                         <textarea id="message" name="message" placeholder='mensaje' ></textarea>

//                     </div>
//                 </div>

//                 <div className={styles['columna-2']} >
//                     <p>↪️</p>  
//                     <input id="send" name="send" type="submit"></input>

//                 </div>
//         </form>  
//     </div>
//   )
// }

export default Formu