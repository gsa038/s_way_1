import React from 'react';
import s from './SendMessage.module.css';

const SendMessage = (props) => {

    let newMessageElement = React.createRef();

    let newMessage = () => {
        props.newMessageText? props.newMessage(props.newMessageText): alert('Message can\'t be empty');
    };

    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={s.sendBlock}>
            <div className={s.sendTextAreaBlock}>
                <textarea className={s.sendTextArea} ref={newMessageElement} onChange={updateNewMessageText} value={props.newMessageText}></textarea>
            </div>
            <div className={s.sendButtonBlock}>
                <button className={s.sendButton} onClick={newMessage}>Send message</button>
            </div>
        </div>
    );
}

export default SendMessage;