import React from 'react';
import s from './Message.module.css';
import { MessageType } from '../../../types/types';

type PropsType = {
    message: MessageType
}

const Message: React.FC<PropsType> = (props) => {

    const messageItemClassName = props.message.isMyMessage ? 
                                        s.messageItem + ' ' + s.myMessage : 
                                        s.messageItem;

    return (
        <div className={messageItemClassName}>{props.message.message}</div>
    );
}

export default Message;