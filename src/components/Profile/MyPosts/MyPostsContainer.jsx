import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostCreator } from '../../../redux/profile-reducer'

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        if (state.profilePage.newPostText) {
            props.store.dispatch(addPostCreator())
        } else {
            alert('Post can\'t be empty');
        }
    };

    let updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostCreator(text));
    };

    return (
        <MyPosts posts={state.profilePage.posts} 
                    newPostText={state.profilePage.newPostText}  
                    updateNewPostText={updateNewPostText} 
                    addPost={addPost} />
    );
}

export default MyPostsContainer;