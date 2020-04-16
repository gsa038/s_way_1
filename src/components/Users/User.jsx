import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/236832.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, follow }) => {
    return (
        <div className={s.userItem}>
            <span>
                <NavLink to={'/profile/' + user.id}>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="ava" className={s.userPhoto} />
                    </div>
                </NavLink>
                <div>
                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        user.followed
                            ? follow(false, user.id)
                            : follow(true, user.id)
                    }}>{user.followed ? "Unfollow" : "Follow"}</button>
                </div>
            </span>
            <span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    );
}

export default User;