import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/236832.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                            <button onClick={() => {
                                u.isFollowed
                                    ? (
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "40a499b6-4421-4c8e-b336-09492ab319c5"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.toggleFollow(u.id)           
                                            }
                                        })
                                    )
                                    : (
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "40a499b6-4421-4c8e-b336-09492ab319c5"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.toggleFollow(u.id)           
                                            }
                                        })
                                    )
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