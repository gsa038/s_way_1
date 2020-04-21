// import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friends: state.navigationData.friends,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps) (Navbar);

export default NavbarContainer;