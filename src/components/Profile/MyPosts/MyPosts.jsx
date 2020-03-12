import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, updateNewPostCreator } from '../../../redux/profile-reducer'

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCounts={p.likesCounts}/>);

    let addPost = () => {
        if (props.newPostText) {
            props.dispatch(addPostCreator())
        } else {
            alert('Post can\'t be empty');
        }
    };

    let updateNewPostText = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostCreator(text));
    };

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder="Enter your post here" onChange={updateNewPostText} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div >
        </div>
    );
}

export default MyPosts;