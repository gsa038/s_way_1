import Dialogs from './Dialogs'
import { sendMessage, DialogsStateType } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'

type MapStatePropsType = {
    dialogsPage: DialogsStateType
}

type MapDispatchPropsType = {
    sendMessage: (newMessageText: string) => void
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {sendMessage}),    
    withAuthRedirect)
    (Dialogs)

export default DialogsContainer