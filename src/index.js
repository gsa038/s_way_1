import * as serviceWorker from './serviceWorker';
// import { rerenderEntireTree } from './render';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { addPost, updateNewPostText, newMessage, updateNewMessageText } from './redux/state';
import { BrowserRouter } from "react-router-dom";
import StoreContext, { Provider } from './StoreContext';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}



rerenderEntireTree(store.getState());

store.subscribe( () => {
    rerenderEntireTree(store.getState())
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
