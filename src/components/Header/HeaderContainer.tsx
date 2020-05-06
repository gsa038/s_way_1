import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {doLogout} from '../../redux/auth-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
    isAuth: boolean,
    login: string | null,
    userId: number | null
}

type MapDispatchPropsType = {
    doLogout: () => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    
    render() {
        return this.props.isAuth && <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId
})
export default compose(
    connect(mapStateToProps, {doLogout}),
    withAuthRedirect)
     (HeaderContainer);