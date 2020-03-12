import React from 'react';
import s from './SendMessage.module.css';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogs-reducer';

const SendMessage = (props) => {
    
    let newMessage = () => {
        if (props.state.newMessageText) {
            props.dispatch(sendMessageCreator())
        } else {
            alert('Message can\'t be empty');
        }
    };

    let updateNewMessageText = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextCreator(text));
    };

    return (
        <div className={s.sendBlock}>
            <div className={s.sendTextAreaBlock}>
                <textarea placeholder="Enter your message here" className={s.sendTextArea} onChange={updateNewMessageText} value={props.state.newMessageText}></textarea>
            </div>
            <div className={s.sendButtonBlock}>
                <button className={s.sendButton} onClick={newMessage}>Send message</button>
            </div>
        </div>
    );
}

export default SendMessage;