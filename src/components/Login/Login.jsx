import React from 'react';
import s from './Login.module.css';
import formStyle from '../common/FormsControls/FormsControl.module.css'
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { InputArea, createField } from '../common/FormsControls/FormsControls';
import { Redirect } from 'react-router';

const input = InputArea("input")

const LoginForm = ({ handleSubmit, error, captchaUrl, getCaptcha }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.loginArea}>
                <div className={s.loginForm}>
                    {createField("Email...", "email", [required], input)}
                    {createField("Password...", "password", [required], input, { type: "password" })}
                    {/* {createField(null, "rememberMe", [], input, { type: "checkbox", className: "sss"}, "remember me")} */}
                    <div className={s.rememberMeArea}>
                    <Field type="checkbox" name="rememberMe" component={input} className={s.rememberMeBox}  />
                    <span className={s.rememberMeText}>remember me</span>
                    </div>
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
                                <img onClick={getCaptcha} src={captchaUrl} alt="CaptchaImg" />
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
    return <div className={s.loginPage}>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} getCaptcha={props.getCaptcha} />
    </div>
}

export default Login;