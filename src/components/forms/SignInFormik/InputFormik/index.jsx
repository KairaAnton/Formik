import React from 'react';
import {Field,ErrorMessage } from 'formik';


const InputFormik = (props) => {

    const { name,...rest} = props;
    return (
        
            <>
            <Field name={name} {...rest} />
            <ErrorMessage name={name} component="span" />
            </>
    );
}

export default InputFormik;
