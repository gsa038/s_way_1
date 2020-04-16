import React from 'react';
import styles from './FormsControl.module.css';
import { Field } from 'redux-form';


export const InputArea = InputType => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <InputType {...input} {...props}/>
            </div>
            { hasError && <span>{error}</span> }
        </div>   
    )    
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}  /> {text}
    </div>
)