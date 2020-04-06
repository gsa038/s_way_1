import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm, Field} from 'redux-form';
import { maxlength, required } from '../../utils/validators/validators';
import { InputArea } from '../common/FormsControls/FormsControls';

const textArea = InputArea("textarea")

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem name={d.name} key={d.id} id={d.id} />));
    let messagesElements = props.dialogsPage.messages.map(m => (<Message message={m} key={m.id} />));

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.verticalSeparator}></div>
            <div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const maxlength20 = maxlength(20); 

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.sendBlock}>
                <div className={s.sendTextAreaBlock}>
                    <Field component={textArea} name="newMessageText"
                        validate={[required, maxlength20]}
                        placeholder="Enter your message here"
                        className={s.sendTextArea} />
                </div>
                <div className={s.sendButtonBlock}>
                    <button className={s.sendButton}>Send message</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)

export default Dialogs;