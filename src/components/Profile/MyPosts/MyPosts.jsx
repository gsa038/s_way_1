import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field } from 'redux-form';
import { required, maxlength } from '../../../utils/validators/validators';
import { InputArea } from '../../common/FormsControls/FormsControls';

const maxlength10 = maxlength(10);
const textArea = InputArea("textarea")

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map( p => <Post message={p.message} key={p.id} likesCounts={p.likesCounts}/>);

    let addPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                { postsElements }
            </div >
        </div>
    );
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={textArea} 
                name="newPostText" 
                placeholder="Enter your post here" 
                validate={[required, maxlength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'}) (AddPostForm)

export default MyPosts;