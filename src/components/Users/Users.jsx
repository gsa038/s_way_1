import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/236832.png';

class Users extends React.Component {
    
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=100")
        .then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div className={s.usersContainer}>
            {
             this.props.users.map( u => <div className={s.userItem} key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } alt="ava" className={s.userPhoto}/>
                    </div>
                    <div>
                <button onClick={() =>{this.props.toggleFollow(u.id)}}>{ u.isFollowed ? "Unfollow" : "Follow"}</button>

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
}



export default Users;