import React from 'react';
import s from './Login.module.css';
import formStyle from '../common/FormsControls/FormsControl.module.css'
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { InputArea, createField } from '../common/FormsControls/FormsControls';
import { Redirect } from 'react-router';

const input = InputArea("input")

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form className={s.login} onSubmit={handleSubmit}>
            <div className={s.loginPage}>
                <div className={s.loginForm}>
                    {createField("Email...", "email", [required], input)}
                    {createField("Password...", "password", [required], input, { type: "password" })}
                    {createField(null, "rememberMe", [], input, { type: "checkbox"}, "remember me")}
                    {error &&
                        <div className={formStyle.formSummaryError}>
                            {error}
                        </div>
                    }
                    <div>
                        <button>Sign in</button>
                    </div>  
                    {captchaUrl &&
                        <div>
                            <div>
                                <img src={captchaUrl} alt="CaptchaImg" />
                            </div>
                            {createField("Input captcha data", "captchaString", [], input)}
                        </div>
                    }
                </div>
            </div >
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
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

export default Login;