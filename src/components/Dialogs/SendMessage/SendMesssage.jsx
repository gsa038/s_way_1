import React from 'react';
import s from './SendMessage.module.css';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../redux/state';

const SendMessage = (props) => {
    
    let newMessageElement = React.createRef();

    let newMessage = () => {
        if (props.state.newMessageText) {
            props.dispatch(addMessageActionCreator())
        } else {
            alert('Message can\'t be empty');
        }
    };

    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    };

    return (
        <div className={s.sendBlock}>
            <div className={s.sendTextAreaBlock}>
                <textarea className={s.sendTextArea} ref={newMessageElement} onChange={updateNewMessageText} value={props.state.newMessageText}></textarea>
            </div>
            <div className={s.sendButtonBlock}>
                <button className={s.sendButton} onClick={newMessage}>Send message</button>
            </div>
        </div>
    );
}

export default SendMessage;