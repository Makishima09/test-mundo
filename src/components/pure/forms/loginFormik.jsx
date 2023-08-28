import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
                password: Yup.string()
                            .required('Password is required')
    }
)



const LoginFormik = () => {
 
    const initialCredentials = {
        email: '',
        password: ''
    }
    
 
    return (
    <div>
        <h4>Login Formik</h4>
        <Formik
            // Initial values that the form will take
            initialValues = { initialCredentials }
            // Yup Validation Schema
            validationSchema={LoginSchema}
            // OnSubmit Event
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                // We save the data in the localstorage
                localStorage.setItem('credentials', values)
      }}
      >
        {({ values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur }) => (
                <Form>
                <label htmlFor="email">Email</label>
                <Field id="email" type='email' name="email" placeholder="email@example.com" />
                {/* Email errors */}
                {
                    errors.email && touched.email && 
                    (
                        // <div className='error'>
                        //     <p>{errors.email} </p>
                        // </div>
                        <ErrorMessage name="email" component='div'/>
                    )
                }

                <label htmlFor="password">Password</label>
                <Field
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                />
                {/* Password Errors */}
                {
                    errors.password && touched.password && 
                    (
                        // <div className='error'>
                        //     <p>{errors.password} </p>
                        // </div>
                        <ErrorMessage name="password" component='div'/>
                    )
                }

                <button type="submit">Login</button>
                {isSubmitting ? (<p>Login your credentials...</p>) : null}
            </Form>
        )
    }
        {/* We obtain props from Formik */}
        </Formik>
        
    </div>
  )
}

export default LoginFormik