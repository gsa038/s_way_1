import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import defaultUserPhoto from '../../../assets/images/236832.png';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import cn from 'classnames';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ isOwner, userProfile, status, updateStatus, uploadPhoto, saveProfile }) => {
    
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

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    const offEditMode = () => {
        setEditMode(false);
    }

    return (
        <div>
            <div className={s.description}>
                <div className={s.avaBlock}>
                    <div className={s.ava_img}>
                        <img src={userProfile.photos.large || defaultUserPhoto} alt="Avatar"></img>
                        {isOwner && <div>
                            <input className={s.avaInput} id="avaFile" type="file" onChange={onMainPhotoSelected} />
                            <label className={s.avaInputLabel} for="avaFile">Choose a file</label>
                        </div>}
                    </div>
                    <div>
                        <ProfileStatusWithHooks status={status} isOwner={isOwner} updateStatus={updateStatus} />
                    </div>
                </div>
                { editMode 
                    ? <ProfileDataForm initialValues={userProfile} onSubmit={onSubmit} offEditMode={offEditMode} /> 
                    : <ProfileData
                        className={s.descriptionRightColunn}
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
    <div className={s.descriptionRightColunn}>
        {isOwner && <div><button className={s.editDescriptionButton} onClick={goToEditMode}>edit</button></div>}
        <div className={s.descriptionItem}><b>Fullname:</b> {userProfile.fullName}</div>
        <div className={s.descriptionItem}><b>Contacts:</b></div>
        <div className={s.contactsBlock}>{
            Object.entries(userProfile.contacts).map(([k, v]) => v ? <div key={k}><b>{k}</b>: <a className={s.contactLink} target="_blank" href={v}>{v}</a></div> : null)
        }</div>
        <div className={s.descriptionItem}><b>Looking for a job:</b> {userProfile.lookingForAJob ? "Yes" : "No"}</div>
        {userProfile.lookingForAJob && <div className={s.descriptionItem}><b>My professionals skills:</b> {userProfile.lookingForAJobDescription}</div>}
        <div className={s.descriptionItem}><b>About me:</b></div>
        <div className={s.descriptionItem}>{userProfile.aboutMe}</div>
    </div>
    )
}

export default ProfileInfo;