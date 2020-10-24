import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik, Field,ErrorMessage } from 'formik';
import * as Yup from "yup";
import styles from './SignInFormik.module.css'



const SignInFormik = () => {
  const initialValues = {
    login: '',
    password: '',
  };

  const handlerSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };


const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    password: Yup.string(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required('Required')
  });

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
        <Form>
          <Field name="login" type="text" />
            <ErrorMessage name="login" />
          <Field name="password" type="password" />
          <ErrorMessage name="passwword"/>
          <input type="submit" value="Sign in"/>
        </Form>
      </Formik>
    </>
  );
};

SignInFormik.propTypes = {};

export default SignInFormik;
