import React from 'react';
import { useState } from 'react';
// import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    useState(false)

    return (
        <div>
            {
                <div>
                    <span >{props.status || 'Установить статус'} yo</span>
                </div>
            }
            {false &&
                <div>
                    <input autoFocus={true} value={""}></input>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;