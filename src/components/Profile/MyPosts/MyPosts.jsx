import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCounts: 15},
        {id: 2, message: "It\'s my first post", likesCounts: 20},
        {id: 3, message: "BlaBla", likesCounts: 30},
        {id: 4, message: "Lala", likesCounts: 40}
    ]

    let postsElements = posts.map( p => <Post message={p.message} likesCounts={p.likesCounts}/>)

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div >
        </div>
    );
}

export default MyPosts;