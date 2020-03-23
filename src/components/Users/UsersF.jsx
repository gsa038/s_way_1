import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/236832.png';

let Users = (props) => {
    
    let getUsers = () => 
    {    
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    }
    
    return <div>
        <button onClick={getUsers}>Get users</button>
        {
         props.users.map( u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto } alt="ava" className={s.userPhoto}/>
                </div>
                <div>
            <button onClick={() =>{props.toggleFollow(u.id)}}>{ u.isFollowed ? "Unfollow" : "Follow"}</button>
                    
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
}



export default Users;