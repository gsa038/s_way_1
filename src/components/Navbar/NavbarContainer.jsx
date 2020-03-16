// import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friends: state.navigationData.friends
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

let NavbarContainer = connect(mapStateToProps, mapDispatchToProps) (Navbar);

export default NavbarContainer;