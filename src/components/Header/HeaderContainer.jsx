import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {doLogout} from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class HeaderContainer extends React.Component {
    
    render() {
        return this.props.isAuth && <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId
})
export default compose(
    connect(mapStateToProps, {doLogout}),
    withAuthRedirect)
     (HeaderContainer);