import "./index.css";
import React from "react";
import Button from "../button/Button";
import { Formik } from 'formik';

class Form extends React.Component {
    render() {
        return (<>
            <div className="form">
                <div className="name-form">Create an account</div>
                <div className="name-text">Let's get started with your 30 days free trial</div>

                <Formik
                    initialValues={{ name: '', email: '', password: '' }}                    
                    validate={values => {
                        let inputName = document.getElementById("name");
                        let inputEmail = document.getElementById("email");
                        let inputPassword = document.getElementById("password");
                        const errors = {};

                        if (!values.name || values.name.length < 2) {                            
                            errors.name = 'Required';
                        } else if (
                            /[0-9]/.test(values.name) //&& values.name.length < 2 
                        ) {
                            inputName.classList.add('invalid');
                            errors.name = 'Invalid name, please, enter yout name';
                        }

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                        ) {
                            inputEmail.classList.add('invalid');
                            errors.email = 'Invalid email address';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (
                            !/[0-9A-Z]{8,}/i.test(values.password)
                        ) {
                            inputPassword.classList.add('invalid');
                            errors.password = 'password is short, it must be more than 8 characters';                            
                        }
                       // inputPassword.classList.remove('invalid');
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className="inputs">
                            <label htmlFor="name" className="inputAll">Name</label>
                            <input type="name"
                                name="name"
                                id="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name} />
                            {errors.name && touched.name && errors.name}
                            <label htmlFor="email" className="inputAll">Email</label>
                            <input type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email} />
                            {errors.email && touched.email && errors.email}
                            <label htmlFor="password" className="inputAll">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <Button color="black" type="submit" disabled={isSubmitting}>Create Account</Button>
                        </form>
                    )
                    }
                </Formik>
                <Button color="white">
                    <img src="/Vector.png" alt="G" />   Sign up with Google</Button>
                <div className="text-form">Already have an account?  <span> Sign in</span></div>
            </div>
        </>)
    }
}

// <form >
//     <div className="name-form">Create an account</div>
//     <div className="name-text">Let's get started with your 30 days free trial</div>
//     <div className="inputs">
//     <label htmlFor="name" className="inputAll">Name</label>
//     <input type="text" id="name" />

//     <label htmlFor="email" className="inputAll">Email</label>
//     <input type="text" id="email" />

//     <label htmlFor="password" className="inputAll">Password</label>
//     <input type="text" id="password" />
//     </div>                

//     <Button color="black">Create Account</Button>
//     <Button color="white">
//         <img src="/Vector.png" alt="G"/>   Sign up with Google</Button>

//     <div className="text-form">Already have an account?  <span> Sign in</span></div>
// </form>
export default Form;