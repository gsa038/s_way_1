import { DialogType, MessageType } from "../types/types";

const SEND_MESSAGE = 's_way_1/dialogs/SEND-MESSAGE'

type InitialStateType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

let initialState: InitialStateType = {
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

const dialogsReducer =  (state = initialState, action): InitialStateType => {
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

export type SendMessageType = {
    type: typeof SEND_MESSAGE,
    newMessageText: string
}

export const sendMessage = (newMessageText: string): SendMessageType => ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer