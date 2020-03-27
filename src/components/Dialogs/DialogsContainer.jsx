import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, { updateNewMessageText, sendMessage}) (withAuthRedirect(Dialogs));

export default DialogsContainer;