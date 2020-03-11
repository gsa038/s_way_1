import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCounts={p.likesCounts}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.newPostText? props.addPost(props.newPostText):alert('Post can\'t be empty');
    };

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={updateNewPostText} value={props.newPostText}/>
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