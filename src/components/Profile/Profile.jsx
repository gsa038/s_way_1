import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content_img}>
                <img src="https://wallpaperaccess.com/full/121194.jpg"></img>
            </div>
            <div className={classes.ava_img}>
                <img src="https://www.softpaz.com/wallpapers/download/12365/moody-tiger-2560-1600.jpg"></img>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;