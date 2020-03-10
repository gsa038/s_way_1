import React from 'react';
import s from './Navbar.module.css';
import NavMenu from './NavMenu/NavMenu';
import NavFriends from './NavFriends/NavFriends';

const Navbar = (props) => {
    return (
      <div>
        <NavMenu />
        <NavFriends state={props.state.friends} />
      </div>
    );
}

export default Navbar;