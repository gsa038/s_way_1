import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map( p => <Post message={p.message} key={p.id} likesCounts={p.likesCounts}/>);

    let addPost = () => {
        props.addPost();
    };

    let updateNewPostText = (e) => {

        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder="Enter your post here" onChange={updateNewPostText} value={props.profilePage.newPostText}/>
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