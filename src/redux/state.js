import { rerenderEntireTree } from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCounts: 15 },
            { id: 2, message: "It\'s my first post", likesCounts: 20 },
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
}

window.state = state;

export let addPost = () => {
    let newPost = { id: 5, message: state.profilePage.newPostText, likesCounts: 0 };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (updateNewPostTextMessage) => {
    state.profilePage.newPostText = updateNewPostTextMessage;
    rerenderEntireTree(state);
}

export let newMessage = () => {
    let newMessage = { id: 6, message: state.dialogsPage.newMessageText, dialogId: 2, isMyMessage: true }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);

}

export let updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderEntireTree(state);
}

export default state;