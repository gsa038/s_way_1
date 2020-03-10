import React from 'react';
import s from './SendMessage.module.css';

const SendMessage = () => {

    let newMessageElement = React.createRef();

    let AddMessage = () => {
        let messageText = newMessageElement.current.value;
        alert(messageText);
    }

    return (
        <div className={s.sendBlock}>
            <div className={s.sendTextAreaBlock}>
                <textarea className={s.sendTextArea} ref={newMessageElement}></textarea>
            </div>
            <div className={s.sendButtonBlock}>
                <button className={s.sendButton} onClick={AddMessage}>Send message</button>
            </div>
        </div>
    );
}

export default SendMessage;