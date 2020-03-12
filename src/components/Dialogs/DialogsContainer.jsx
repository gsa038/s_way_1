import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let newMessage = () => {
        if (state.newMessageText) {
            props.store.dispatch(sendMessageCreator())
        } else {
            alert('Message can\'t be empty');
        }
    };

    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    };

    return <Dialogs dialogsPage={state}
                    newMessage={newMessage} 
                    updateNewMessageText={updateNewMessageText} />
}

export default DialogsContainer;