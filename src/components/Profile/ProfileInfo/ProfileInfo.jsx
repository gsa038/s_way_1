import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profile_img}>
                <img src="https://wallpaperaccess.com/full/121194.jpg"></img>
            </div>
            <div className={s.description_block}>
                <div className={s.ava_img}>
                    <img src="https://www.softpaz.com/wallpapers/download/12365/moody-tiger-2560-1600.jpg"></img>
                </div>
                <div>
                    profile info
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;