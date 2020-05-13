import { connect } from 'react-redux';
import {doLogin, doLogout, getCaptcha} from '../../redux/auth-reducer';
import Login from './Login';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchPropsType = {
    doLogin: (email: string, password: string, rememberMe: boolean, captchaString: string) => void,
    doLogout: () => void,
    getCaptcha: () => void
}

export type LoginPropsType = MapStatePropsType & MapDispatchPropsType 

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { doLogin, doLogout, getCaptcha })(Login);