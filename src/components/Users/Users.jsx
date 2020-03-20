import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    
    if (props.users.length === 0) {
        props.setUsers( [
                {id: 1, photoUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", fullname: "Vasiliy S.", status: "I'm studying programming right now...", location: {country: "Russia", city: "SPb"}, isFollowed: true},
                {id: 2, photoUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", fullname: "Alex M.", status: "I'm studying programming right now to...", location: {country: "Russia", city: "Moscow"}, isFollowed: false},
                {id: 3, photoUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", fullname: "Andrey A.", status: "And I'm studying programming right now to...", location: {country: "Russia", city: "Rostov-on-Don"}, isFollowed: false},
                {id: 4, photoUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", fullname: "Nikolay U.", status: "And I'm studying programming right now to)))...", location: {country: "Belarus", city: "Minsk"}, isFollowed: true}
            ]
        )
    }
    
    return <div>
        {
         props.users.map( u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} alt="ava" className={s.userPhoto}/>
                </div>
                <div>
            <button onClick={() =>{props.toggleFollow(u.id)}}>{ u.isFollowed ? "Unfollow" : "Follow"}</button>
                    
                </div>
            </span>
            <span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
        } 
        </div>
}



export default Users;