import React from 'react';
import style from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLenght } from '../../utils/validators/validators';
import { InputArea } from '../common/FormsControls/FormsControls';
import { Redirect } from 'react-router';

const maxLenght15 = maxLenght(15)
const maxLenght20 = maxLenght(20)
const input = InputArea("input")

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder={"Email..."} name={'email'} component={input}
                        validate={[required, maxLenght15]} />
                </div>
                <div>
                    <Field placeholder={"Password..."} name={'password'} component={input} type="password"
                        validate={[required, maxLenght20]} />
                </div>
                <div>
                    <Field component={input} name={'rememberMe'} type={"checkbox"} />
                    <span>remember me</span>
                </div>
                <div>
                    <button>Sign in</button>
                </div>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.doLogin(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }


    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;