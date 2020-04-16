import React from 'react';
// import style from './Login.module.css';
import formStyle from '../common/FormsControls/FormsControl.module.css'
import { reduxForm, Field } from 'redux-form';
import { required, maxlength } from '../../utils/validators/validators';
import { InputArea, createField } from '../common/FormsControls/FormsControls';
import { Redirect } from 'react-router';

const maxlength15 = maxlength(15)
const maxlength20 = maxlength(20)
const input = InputArea("input")

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div >
                {/* <div> */}
                    {/* <Field placeholder={"Email..."} name={'email'} component={input}
                        validate={[required, maxlength15]} /> */}
                {/* </div> */}
                {/* <div>
                    <Field placeholder={"Password..."} name={'password'} component={input} type="password"
                        validate={[required, maxlength20]} />
                </div> */}
                {/* <div>
                    <Field component={input} name={'rememberMe'} type={"checkbox"} />
                    <span>remember me</span>
                </div> */}
                {createField("Email...", "email", [required, maxlength15], input )}
                {createField("Password...", "password", [required, maxlength20], input, {type: "password"} )}
                {createField(null, "rememberMe", [], input, {type: "checkbox"}, "remember me" )}
                {error &&
                    <div className={formStyle.formSummaryError}>
                        {error}
                    </div>}
                <div>
                    <button>Sign in</button>
                </div>
                {captchaUrl &&
                    <div>
                        <div>
                            <img src={captchaUrl} alt="CaptchaImg"/>
                        </div>
                        {/* <div>
                            <Field component={input} name={'captchaString'} placeholder={"Input captcha data"} />
                        </div> */}
                        {createField("Input captcha data", "captchaString", [], input )}
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