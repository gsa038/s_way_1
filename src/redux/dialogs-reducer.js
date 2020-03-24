const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: "Helen" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Ivan" }
    ],
    messages: [
        { id: 1, message: "Hi", dialogId: 2, isMyMessage: true },
        { id: 2, message: "How is your name?", dialogId: 2, isMyMessage: true },
        { id: 3, message: "My name is ...", dialogId: 2, isMyMessage: false },
        { id: 4, message: "Yet another message", dialogId: 2, isMyMessage: true },
        { id: 5, message: "Yet another message", dialogId: 2, isMyMessage: false }
    ],
    newMessageText: ''
}

const _newMessage = (state) => {
    return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, { id: 6, message: state.newMessageText, dialogId: 2, isMyMessage: true } ]
    };
}

const _updateNewMessageText = (state, text) => {
    return {
        ...state,
        newMessageText: text
    };
}

const dialogsReducer =  (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            return _newMessage(state);
        case UPDATE_NEW_MESSAGE_TEXT:
            return _updateNewMessageText(state, action.messageText);
        default:
            return state;
    }
}

export const sendMessage = () => ({ type: SEND_MESSAGE })

export const updateNewMessageText = (text) => ({
        type : UPDATE_NEW_MESSAGE_TEXT,
        messageText : text
    })

export default dialogsReducer;