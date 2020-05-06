// import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { FriendType } from '../../types/types';

type MapStatePropsType = {
  friends: Array<FriendType>,
  isAuth: boolean
}

type MapDispatchPropsType = {

}

export type NavbarPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    friends: state.navigationData.friends,
    isAuth: state.auth.isAuth
  }
}

let NavbarContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {}) (Navbar);

export default NavbarContainer;