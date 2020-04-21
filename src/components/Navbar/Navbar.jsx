import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import NavFriends from './NavFriends/NavFriends';

const Navbar = (props) => {
  return (
    props.isAuth &&
    <div>
      <NavMenu />
      <NavFriends friends={props.friends} />
    </div>
  );


}

export default Navbar;