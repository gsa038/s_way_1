import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field } from 'redux-form';
import { required, maxlength } from '../../../utils/validators/validators';
import { InputArea } from '../../common/FormsControls/FormsControls';

const maxlength10 = maxlength(10);
const textArea = InputArea("textarea")

class MyPosts extends React.PureComponent {

    componentDidMount() {
        setTimeout( () => {
            this.setState({a: 15})
        }, 5000)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    render() {
        console.log('render MyPosts')
        let postsElements = this.props.posts.map( p => <Post message={p.message} key={p.id} likesCounts={p.likesCounts}/>);

        let addPost = (values) => {
            this.props.addPost(values.newPostText);
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