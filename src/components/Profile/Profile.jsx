import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCounts: 15},
        {id: 2, message: "It\'s my first post", likesCounts: 20},
        {id: 3, message: "BlaBla", likesCounts: 30},
        {id: 4, message: "Lala", likesCounts: 40}
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;