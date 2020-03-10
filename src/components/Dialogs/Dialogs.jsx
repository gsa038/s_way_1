import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMesssage';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />));
    let messagesElements = props.state.messages.map(state => (<Message state={state} />));

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
                <SendMessage />
            </div>
        </div>
    );
}

export default Dialogs;