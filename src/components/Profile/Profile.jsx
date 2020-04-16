import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ userProfile, status, updateStatus }) => {
    return (
        <div>
            <ProfileInfo userProfile={userProfile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer />
        </div>
    );
}



export default Profile;