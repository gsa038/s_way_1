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
        _addPost() {
            let newPost = { id: 5, message: this._state.profilePage.newPostText, likesCounts: 0 };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        },
        _updateNewPostText(text) {
            this._state.profilePage.newPostText = text;
            this._callSubscriber(this._state);
        },
        _newMessage() {
            let newMessage = { id: 6, message: this._state.dialogsPage.newMessageText, dialogId: 2, isMyMessage: true }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        },
        _updateNewMessageText(text) {
            this._state.dialogsPage.newMessageText = text;
            this._callSubscriber(this._state);
        },
        subscribe(observer) {
            this._callSubscriber = observer;
        },
        dispatch(action) {
            if (action.type === 'ACTION-POST') {
                this._addPost();
            } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                this._updateNewPostText(action.postText)
            } else if (action.type === 'ACTION-MESSAGE') {
                let newMessage = { id: 6, message: this._state.dialogsPage.newMessageText, dialogId: 2, isMyMessage: true }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
            } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
                this._state.dialogsPage.newMessageText = action.messageText;
                this._callSubscriber(this._state);
            }
             
        }
}


export default store;

window.state = store.getState();