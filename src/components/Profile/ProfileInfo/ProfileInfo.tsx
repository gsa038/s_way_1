import React, { useState, ChangeEvent } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import defaultUserPhoto from '../../../assets/images/236832.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'
import { AuthStateType } from '../../../redux/auth-reducer'
import { ProfileStateType } from '../../../redux/profile-reducer'
import { ProfileType } from '../../../types/types'

type MatchParamType = {
    params: {
        userId: number
    }
}

type MapStatePropsType = {
    userProfile: ProfileStateType,
    status: string,
    auth?: AuthStateType,
    match?: MatchParamType
}

type MapDispatchPropsType = {
    updateStatus: () => void,
    uploadPhoto: () => void,
    saveProfile: (formData: ProfileType) => Promise<void>
}

type OwnDispatchPropsType = {
    isOwner: boolean
}

export type ProfileInfoPropsType = MapStatePropsType & MapDispatchPropsType & OwnDispatchPropsType


const ProfileInfo: React.FC<ProfileInfoPropsType> = ({ isOwner, userProfile, status, updateStatus, uploadPhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!userProfile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) {
            // @ts-ignore
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
                        <img src={userProfile.photos!.large || defaultUserPhoto} alt="Avatar"></img>
                        {isOwner && <div>
                            <input className={s.avaInput} id="avaFile" type="file" onChange={onMainPhotoSelected} />
                            <label className={s.avaInputLabel} htmlFor="avaFile">Choose a file</label>
                        </div>}
                    </div>
                    <div>
                        <ProfileStatusWithHooks status={status} isOwner={isOwner} updateStatus={updateStatus} />
                    </div>
                </div>
                { 
                    //@ts-ignore
                    editMode  ? <ProfileDataForm initialValues={userProfile} onSubmit={onSubmit} offEditMode={offEditMode} /> 
                    : <ProfileData
                        userProfile={userProfile} 
                        isOwner={isOwner}
                        goToEditMode={ () => {setEditMode(true)} } 
                        /> }
            </div>
        </div>
    );
}

const ProfileData = ({userProfile, isOwner, goToEditMode}) => {
    return (
    <div className={s.descriptionRightColunn}>
        {isOwner && <div className={s.editDescriptionButtonArea}><button className={s.editDescriptionButton} onClick={goToEditMode}>edit</button></div>}
        <div className={s.descriptionItem}><b>Fullname:</b> {userProfile.fullName}</div>
        <div className={s.descriptionItem}><b>Contacts:</b></div>
        <div className={s.contactsBlock}>{
            //@ts-ignore
            Object.entries(userProfile.contacts).map(([k, v]) => v ? <div key={k}><b>{k}</b>: <a className={s.contactLink} target="_blank" rel="noopener noreferrer" href={v}>{v}</a></div> : null)
        }</div>
        <div className={s.descriptionItem}><b>Looking for a job:</b> {userProfile.lookingForAJob ? "Yes" : "No"}</div>
        {userProfile.lookingForAJob && <div className={s.descriptionItem}><b>My professionals skills:</b> {userProfile.lookingForAJobDescription}</div>}
        <div className={s.descriptionItem}><b>About me:</b></div>
        <div className={s.descriptionItem}>{userProfile.aboutMe}</div>
    </div>
    )
}

export default ProfileInfo;