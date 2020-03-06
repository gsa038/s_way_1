import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                My posts
                <Post message="Hi, how are you?" like_counts='15'/>
                <Post message="It's my first post" like_counts='20'/>
            </div >
        </div>
    );
}

export default MyPosts;