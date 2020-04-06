import React from 'react';
import style from './Login.module.css';
import formStyle from '../common/FormsControls/FormsControl.module.css'
import { reduxForm, Field } from 'redux-form';
import { required, maxlength } from '../../utils/validators/validators';
import { InputArea } from '../common/FormsControls/FormsControls';
import { Redirect } from 'react-router';

const maxlength15 = maxlength(15)
const maxlength20 = maxlength(20)
const input = InputArea("input")

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <div>
                    <Field placeholder={"Email..."} name={'email'} component={input}
                        validate={[required, maxlength15]} />
                </div>
                <div>
                    <Field placeholder={"Password..."} name={'password'} component={input} type="password"
                        validate={[required, maxlength20]} />
                </div>
                <div>
                    <Field component={input} name={'rememberMe'} type={"checkbox"} />
                    <span>remember me</span>
                </div>
                {props.error &&
                    <div className={formStyle.formSummaryError}>
                        {props.error}
                    </div>}
                <div>
                    <button>Sign in</button>
                </div>
                {props.captchaUrl &&
                    <div>
                        <div>
                            <img src={props.captchaUrl} alt="CaptchaImg"/>
                        </div>
                        <div>
                            <Field component={input} name={'captchaString'} placeholder={"Input captcha data"} />
                        </div>
                    </div>
                }
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.doLogin(formData.email, formData.password, formData.rememberMe, formData.captchaString)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

export default Login;