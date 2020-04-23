import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import defaultUserPhoto from '../../../assets/images/236832.png';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import cn from 'classnames';

const ProfileInfo = ({ isOwner, userProfile, status, updateStatus, uploadPhoto }) => {
    
    let [editMode, setEditMode] = useState(false);
    const deactivateEditMode = () => {
        setEditMode(false);
    }
    if (!userProfile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            uploadPhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={s.description}>
                <div>
                    <div className={s.ava_img}>
                        <img src={userProfile.photos.large || defaultUserPhoto} alt="Avatar"></img>
                        {isOwner && <div>
                            <input type="file" onChange={onMainPhotoSelected} />
                        </div>}
                    </div>
                    <div>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                    </div>
                </div>
                { editMode 
                    ? <ProfileDataForm userProfile={userProfile} /> 
                    : <ProfileData 
                        userProfile={userProfile} 
                        isOwner={isOwner} 
                        goToEditMode={ () => {setEditMode(true)} } 
                        deactivateEditMode={ deactivateEditMode } /> }
            </div>
        </div>
    );
}

const ProfileData = ({userProfile, isOwner, goToEditMode}) => {
    return (
    <div>
        {isOwner && <div className><button className={s.editDescriptionButton} onClick={goToEditMode}>edit</button></div>}
        <div className={s.descriptionItem}><b>Fullname:</b> {userProfile.fullName}</div>
        <div className={s.descriptionItem}><b>About me:</b></div>
        <div className={s.descriptionItem}>{userProfile.aboutMe}</div>
        <div className={s.descriptionItem}><b>Contacts:</b></div>
        <div className={cn(s.contactsChilds, s.descriptionItem)}>{
            Object.entries(userProfile.contacts).map(([k, v]) => v ? <div><b>{k}</b>: {v}</div> : null)
        }</div>
        <div><b>Looking for a job:</b> {userProfile.lookingForAJob ? "Yes" : "No"}</div>
        {userProfile.lookingForAJob && <div><b>My professionals skills:</b> userProfile.lookingForAJobDescription</div>}
    </div>
    )
}
const ProfileDataForm = ({userProfile}) => {
    return (
    <div className={s.descriptionRightColumn}>
        Form
    </div>
    )
}

export default ProfileInfo;