import React from 'react';
import s from './Message.module.css';

const Message = (props) => {

    const messageItemClassName = props.state.isMyMessage ? 
                                        s.messageItem + ' ' + s.myMessage : 
                                        s.messageItem;

    return (
        <div className={messageItemClassName}>{props.state.message}</div>
    );
}

export default Message;