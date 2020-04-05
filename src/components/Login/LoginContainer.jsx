import { connect } from 'react-redux';
import {doLogin, doLogout} from '../../redux/auth-reducer';
import Login from './Login';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { doLogin, doLogout }) (Login);