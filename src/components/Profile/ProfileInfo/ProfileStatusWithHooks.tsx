import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
            setStatus(e.currentTarget.value);        
    }

    return (
        <div>
            { !editMode && 
                <div className={s.statusBlock}>
                    <span className={s.statusMessage} onDoubleClick={ props.isOwner && activateEditMode } >{ props.isOwner ? props.status || 'Set status' : props.status || 'Status was\'t set'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input className={s.statusInput} onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } value={ status }></input>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;