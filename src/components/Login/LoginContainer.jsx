import { connect } from 'react-redux';
import {doLogin, doLogout, getCaptcha} from '../../redux/auth-reducer';
import Login from './Login';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { doLogin, doLogout, getCaptcha }) (Login);