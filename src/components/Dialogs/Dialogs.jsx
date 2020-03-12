import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />));
    let messagesElements = props.dialogsPage.messages.map(state => (<Message state={state} />));

    let newMessage = () => {
        props.newMessage();
    }
    
    let updateNewMessageText = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
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
                <div>
                    <div className={s.sendBlock}>
                        <div className={s.sendTextAreaBlock}>
                            <textarea placeholder="Enter your message here" className={s.sendTextArea} onChange={updateNewMessageText} value={props.dialogsPage.newMessageText}></textarea>
                        </div>
                        <div className={s.sendButtonBlock}>
                            <button className={s.sendButton} onClick={newMessage}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;