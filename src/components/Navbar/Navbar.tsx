import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import NavFriends from './NavFriends/NavFriends';
import { NavbarPropsType } from './NavbarContainer';

const Navbar: React.FC<NavbarPropsType> = (props) => {
  return (
    <div>
      <NavMenu />
      <NavFriends friends={props.friends} />
    </div>
  );


}

export default Navbar;