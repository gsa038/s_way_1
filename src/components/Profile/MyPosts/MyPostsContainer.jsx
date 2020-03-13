import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostCreator } from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {dispatch(updateNewPostCreator(text))},
        addPost: () => {dispatch(addPostCreator())}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;