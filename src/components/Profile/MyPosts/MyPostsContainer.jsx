// import React from 'react';
import MyPosts from './MyPosts';
import { addPost, updateNewPostText } from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText }) (MyPosts);

export default MyPostsContainer;