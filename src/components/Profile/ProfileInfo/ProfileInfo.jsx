import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import defaultUserPhoto from '../../../assets/images/236832.png';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ isOwner, userProfile, status, updateStatus, uploadPhoto }) => {
    if (!userProfile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length)
        {
            uploadPhoto(e.target.files[0]);
        }
    }
    debugger;
    return (
        <div>
            {/* <div className={s.profile_img}>
                <img src="https://wallpaperaccess.com/full/121194.jpg" alt="Profile"></img>
            </div> */}
            <div className={s.description_block}>
                <div className={s.ava_img}>
                    <img src={userProfile.photos.large || defaultUserPhoto} alt="Avatar"></img>
                    {isOwner && <div>
                        <input type="file" onChange={onMainPhotoSelected} />
                    </div>}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                    <div>{'ID: ' + userProfile.userId}</div>
                </div>
                <div className="">
                    <div>FullName: {userProfile.fullName}</div>
                    <div>About me:</div>
                    <div>{userProfile.aboutMe}</div>
                    <div>Contacts:</div>
                    { 
                        Object.entries(userProfile.contacts).map(([k, v]) => v ? <div>{k}: {v}</div>: null) 
                    }
                    <div>Looking for a job: {userProfile.lookingForAJob ? "Yes" : "No"}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;