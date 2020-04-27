import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm, Field} from 'redux-form';
import { maxlength, required } from '../../utils/validators/validators';
import { InputArea } from '../common/FormsControls/FormsControls';

const textArea = InputArea("textarea")

const Dialogs = ({dialogsPage, sendMessage}) => {

    let dialogsElements = dialogsPage.dialogs.map(d => (<DialogItem name={d.name} key={d.id} id={d.id} />));
    let messagesElements = dialogsPage.messages.map(m => (<Message message={m} key={m.id} />));

    let addNewMessage = (values) => {
        sendMessage(values.newMessageText);
        values.newMessageText = null;
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

const maxMessagelength20 = maxlength(20, 'post'); 

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.sendBlock}>
                <div className={s.sendTextAreaBlock}>
                    <Field component={textArea} name="newMessageText"
                        validate={[required, maxMessagelength20]}
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