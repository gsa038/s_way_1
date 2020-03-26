import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/236832.png';
import { NavLink } from 'react-router-dom';
// import {usersAPI} from '../../api/api';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div className={s.paginator}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })
            }
        </div>
        <div className={s.usersContainer}>
            {
                props.users.map(u => <div className={s.userItem} key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava" className={s.userPhoto} />
                            </div>
                        </NavLink>
                        <div>
                            <button disabled={props.followingInProgress.some(id => id ===u.id)} onClick={() => {
                                u.isFollowed
                                ? props.follow(false, u.id)
                                : props.follow(true, u.id)
                            }}>{u.isFollowed ? "Unfollow" : "Follow"}</button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    </div>
}



export default Users;