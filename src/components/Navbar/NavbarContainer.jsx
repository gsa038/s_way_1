import React from 'react';
import Navbar from './Navbar';
import StoreContext from '../../StoreContext';

const NavbarContainer = (props) => {
  return (
    <StoreContext.Consumer> 
      { (store) => {

        let state = store.getState().navigationData;
        
        return <Navbar friends={state.friends} />
      }
    }
    </StoreContext.Consumer>
  );
}

export default NavbarContainer;