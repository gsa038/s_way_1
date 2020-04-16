import { profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCounts: 15 },
        { id: 2, message: "It's my first post", likesCounts: 20 },
        { id: 3, message: "BlaBla", likesCounts: 30 },
        { id: 4, message: "Lala", likesCounts: 40 }
    ],
    status: null,
    userProfile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: action.newPostText, likesCounts: 0 }]
            };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.userProfile};
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }
}

export const addPost = (newPostText) =>  ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (userProfile) =>  ({ type: SET_USER_PROFILE, userProfile })
export const setStatus = (status) =>  ({ type: SET_STATUS, status })

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