import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from'./DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Helen"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Ivan"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your name?"},
        {id: 3, message: "My name is ..."},
        {id: 4, message: "Yet another message"}
    ]

    let dialogsElements = dialogs.map( d => (<DialogItem name={d.name} id={d.id}/>))
    let messagesElements = messages.map( m => (<Message message={m.message}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;