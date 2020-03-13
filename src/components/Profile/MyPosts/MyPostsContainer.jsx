import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostCreator } from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer> 
            { (store) => {
                let state = store.getState();

                let addPost = () => {
                    if (state.profilePage.newPostText) {
                        store.dispatch(addPostCreator())
                    } else {
                        alert('Post can\'t be empty');
                    }
                };

                let updateNewPostText = (text) => {
                    store.dispatch(updateNewPostCreator(text));
                };

                return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={updateNewPostText}
                    addPost={addPost} />
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;