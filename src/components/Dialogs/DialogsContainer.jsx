import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {



    return (

        <StoreContext.Consumer> 
            { (store) => {
                let state = store.getState().dialogsPage;

                let newMessage = () => {
                    if (state.newMessageText) {
                        store.dispatch(sendMessageCreator())
                    } else {
                        alert('Message can\'t be empty');
                    }
                };

                let updateNewMessageText = (text) => {
                    store.dispatch(updateNewMessageTextCreator(text));
                };
                return <Dialogs dialogsPage={state}
                    newMessage={newMessage}
                    updateNewMessageText={updateNewMessageText} />
            }
        }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;