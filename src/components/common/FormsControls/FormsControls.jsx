import React from 'react';
import styles from './FormsControl.module.css';


export const InputArea = InputType => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <InputType {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>   
    )    
}