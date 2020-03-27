// import React from 'react';
import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, { updateNewMessageText, sendMessage}) (Dialogs);

export default DialogsContainer;