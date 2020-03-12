import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
        getState() {
            return this._state;
        },
        _state: {
            profilePage: {
                posts: [
                    { id: 1, message: "Hi, how are you?", likesCounts: 15 },
                    { id: 2, message: "It's my first post", likesCounts: 20 },
                    { id: 3, message: "BlaBla", likesCounts: 30 },
                    { id: 4, message: "Lala", likesCounts: 40 }
                ],
                newPostText: ''
            }
            ,
            dialogsPage: {
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
            },
            navigationData: {
                friends: [
                    {id: 1, nickname: 'Dimon', ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
                    {id: 2, nickname: 'Vasiliy', ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
                    {id: 3, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
                    {id: 4, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
                    {id: 5, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
                    {id: 6, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
                    {id: 7, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
                    {id: 8, nickname: 'tilipon85',ava: 'https://www.allremont59.ru/wp-content/uploads/2018/02/anonymity-300x300.jpg'},
                ]
            }
        },
        _callSubscriber() {
            console.log('State changed');
        },
        subscribe(observer) {
            this._callSubscriber = observer;
        },
        dispatch(action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this._state.navigationData = sidebarReducer(this._state.navigationData, action);
            this._callSubscriber(this._state);
        }
}

export default store;

window.state = store.getState();