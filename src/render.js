import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { newMessage } from './redux/state';
import { updateNewMessageText } from './redux/state';
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} 
                    addPost={addPost} 
                    updateNewPostText={updateNewPostText}
                    newMessage={newMessage}
                    updateNewMessageText={updateNewMessageText} />
        </BrowserRouter>, document.getElementById('root'));
}
