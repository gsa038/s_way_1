const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCounts: 15 },
        { id: 2, message: "It's my first post", likesCounts: 20 },
        { id: 3, message: "BlaBla", likesCounts: 30 },
        { id: 4, message: "Lala", likesCounts: 40 }
    ],
    newPostText: ''
}

const _addPost = (state) => {
    return {
        ...state,
        newPostText: '',
        posts: [...state.posts, { id: 5, message: state.newPostText, likesCounts: 0 }]
    };
}

const _updateNewPostText = (state, text) => {
    return {
        ...state,
        newPostText: text
    };
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return _addPost(state);
        case UPDATE_NEW_POST_TEXT:
            return _updateNewPostText(state, action.postText);
        default:
            return state;
    }
}

export const addPostCreator = () =>  ({ type: ADD_POST })

export const updateNewPostCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        postText: text
    })

export default profileReducer;