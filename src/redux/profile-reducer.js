import { profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCounts: 15 },
        { id: 2, message: "It's my first post", likesCounts: 20 },
        { id: 3, message: "BlaBla", likesCounts: 30 },
        { id: 4, message: "Lala", likesCounts: 40 }
    ],
    newPostText: '',
    status: null,
    userProfile: null
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
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile};
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }
}

export const addPost = () =>  ({ type: ADD_POST })
export const setUserProfile = (userProfile) =>  ({ type: SET_USER_PROFILE, userProfile })
export const setStatus = (status) =>  ({ type: SET_STATUS, status })
export const updateNewPostText = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        postText: text
    })

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
        });
    } 
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0)
                {
                    dispatch(setStatus(status));
                }
                else
                {
                    dispatch(setStatus('Can\'t load status message from server'));
                }
        });
    } 
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
        });
    } 
}

export default profileReducer;