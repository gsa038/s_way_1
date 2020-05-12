import React from 'react';
import s from './NavFriends.module.css';
import NavFriendsItem from './NavFriendsItem/NavFriendsItem'; 
import { NavbarInitialStateType } from '../../../redux/navigation-reducer'

const NavFriends: React.FC<NavbarInitialStateType> = (props) => {
    
    let NavFriendsElements = props.friends.map(f => (<NavFriendsItem nickname={f.nickname} id={f.id} key={f.id} ava={f.ava} />))

    return (
        <div>
            <h3>Friends</h3>
            <div className={s.friendsElements}>
                { NavFriendsElements }
            </div>
        </div>
    );
}

export default NavFriends;