import React from 'react';
import s from './ProfileInfo.module.css';
import { reduxForm } from 'redux-form';
import { createField, InputArea } from '../../common/FormsControls/FormsControls';
import formStyle from '../../common/FormsControls/FormsControl.module.css'

const input = InputArea("input");

const ProfileDataForm = ({handleSubmit, error, initialValues}) => {
    return (
    <form className={s.descriptionRightColunn} onSubmit={handleSubmit}>
        <div><button className={s.editDescriptionButton}>save</button></div>
        <div className={s.descriptionItem}>
            <b>Fullname: </b> { createField('Full name', 'fullName', [], input) }
        </div>
        <div className={s.descriptionItem}><b>Contacts:</b></div>
        <div className={s.contactsBlock}>{
            Object.entries(initialValues.contacts).map(([k, v]) => <div key={k}>
                <b>{k}</b>: 
                { createField("", "contacts." + k, [], input) }
                </div>)
        }</div>
        <div className={s.descriptionItem}>
            <b>Looking for a job:</b>
            { createField("", "lookingForAJob", [], input, {type: "checkbox"})}
        </div>
        <div className={s.descriptionItem}>
            <b>My professionals skills:</b>
            { createField('My professionals skills', 'lookingForAJobDescription', [], input) }
        </div>
        <div className={s.descriptionItem}><b>About me:</b></div>
        <div className={s.descriptionItem}>
            { createField('About me', 'aboutMe', [], input) }
        </div>
        {error &&
            <div className={formStyle.formSummaryError}>
                {error}
            </div>
        }
    </form>
    )
}

const ProfileDataReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataReduxForm