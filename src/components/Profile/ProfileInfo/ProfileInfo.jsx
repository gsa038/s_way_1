import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/images/236832.png';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div className={s.profile_img}>
                <img src="https://wallpaperaccess.com/full/121194.jpg" alt="Profile"></img>
            </div> */}
            <div className={s.description_block}>
                <div className={s.ava_img}>
                    <img src={props.userProfile.photos.large ? props.userProfile.photos.large : userPhoto} alt="Avatar"></img>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    <div>{'ID: ' + props.userProfile.userId}</div>
                </div>
                <div>
                    <div>Полное имя:</div>
                    <div>{props.userProfile.fullName}</div>
                    <div>Обо мне:</div>
                    <div>{props.userProfile.aboutMe}</div>
                    <div>Контакты:</div>
                    { 
                        Object.entries(props.userProfile.contacts).map(([k, v]) => v ? <div>{k}: {v}</div>: null) 
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;