import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo, { ProfileInfoPropsType } from './ProfileInfo/ProfileInfo';

const Profile: React.FC<ProfileInfoPropsType> = ({isOwner, userProfile, status, updateStatus, uploadPhoto, saveProfile }) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner} 
                            userProfile={userProfile} 
                            status={status}
                            saveProfile={saveProfile}
                            updateStatus={updateStatus} 
                            uploadPhoto={uploadPhoto} />
            <MyPostsContainer />
        </div>
    );
}



export default Profile;