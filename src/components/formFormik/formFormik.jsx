import "./index.css";
import React from "react";
import Button from "../button/Button";
import { Formik } from 'formik';


class FormFormik extends React.Component {

    render() {
        return (<>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validate={values => {

                    const errors = {};
                    if (!values.name || values.name.length < 2) {
                        errors.name = 'Required';
                    } else if (/[0-9]/.test(values.name)) {
                        errors.name = 'Invalid name, please, enter you name';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (
                        !/[0-9A-Z]{8,}/i.test(values.password)
                    ) {
                        errors.password = 'password is short, it must be more than 8 characters';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false)
                    }, 400);
                }}                >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className="inputs">
                        <label htmlFor="name" >Name</label>
                        <input type="name" className={`inputAll ${errors.name ? 'invalid' : ""}`}
                            name="name"
                            id="name" onBlur={handleBlur}
                            value={values.name}
                            onChange={(event) => {
                                handleChange(event)
                            }}
                        />
                        {errors.name && touched.name && errors.name}
                        <label htmlFor="email">Email</label>
                        <input type="email" className={`inputAll ${errors.email ? 'invalid' : ""}`}
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} />
                        {errors.email && touched.email && errors.email}
                        <label htmlFor="password" >Password</label>
                        <input type="password" className={`inputAll ${errors.password ? 'invalid' : ""}`}
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

        </>)
    }
}

export default FormFormik;
