import React from 'react';
import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profile-reducer.ts';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';


class MyPostsContainer extends React.Component {
    render() {
        return (
            <div>
                <MyPosts {...this.props} isOwner={!this.props.match.params.userId} posts={this.props.posts} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
    )
    (MyPostsContainer);