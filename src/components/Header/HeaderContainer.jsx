import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData, doAuth} from '../../redux/auth-reducer';
// import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.doAuth()
        // authAPI.auth()
        // .then(response => {
        //     if (response.data.resultCode === 0) {
        //         let {id, login, email} = response.data.data;
        //         this.props.setAuthUserData(id, email, login)
        //     }
        // });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId
})
export default connect(mapStateToProps, {setAuthUserData, doAuth}) (HeaderContainer);