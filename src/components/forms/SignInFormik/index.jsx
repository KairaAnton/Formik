import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import InputFormik from './InputFormik';
import * as Yup from 'yup';
import styles from './SignInFormik.module.css';

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
      .min(6, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    password: Yup.string(
      /^(?=.*\d)(?=.*[a-z]).*\S(?=.*[A-Z])(?=.*[a-zA-Z]).{8,30}$/
    ).required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={SignupSchema}
      >
        <Form className={styles.formContainer}>
          <p>Username or email address</p>
          <InputFormik
            name="login"
            type="text"
            placeholder="login"
            className={styles.input}
          />
          <p className={styles.paragraph}>
           <span>password     </span> <a href="https://www.google.com.ua/?hl=ru">Forgot password?</a>
          </p>
          <InputFormik
            name="password"
            type="password"
            placeholder="password"
            className={styles.input}
          />

          <input type="submit" value="Sign in" className={styles.sbmButton} />
        </Form>
      </Formik>
    </>
  );
};

SignInFormik.propTypes = {};

export default SignInFormik;
