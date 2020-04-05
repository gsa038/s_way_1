const SEND_MESSAGE = 'SEND-MESSAGE'

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
    ]
}

const dialogsReducer =  (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: action.newMessageText, dialogId: 2, isMyMessage: true } ]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer;