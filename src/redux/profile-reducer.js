import { profileAPI } from "../api/api"

const ADD_POST = 's_way_1/pofile/ADD_POST'
const DELETE_POST = 's_way_1/pofile/DELETE_POST'
const SET_USER_PROFILE = 's_way_1/pofile/SET_USER_PROFILE'
const SET_STATUS = 's_way_1/pofile/SET_STATUS'
const UPLOAD_PHOTO_SUCCESS = 's_way_1/pofile/UPLOAD_PHOTO_SUCCESS'

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
        case UPLOAD_PHOTO_SUCCESS:
            return { ...state, userProfile: {...state.userProfile, photos: action.photos}}
        default:
            return state;
    }
}

export const addPost = (newPostText) =>  ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (userProfile) =>  ({ type: SET_USER_PROFILE, userProfile })
export const setStatus = (status) =>  ({ type: SET_STATUS, status })
export const uploadPhotoSuccess = (photos) => ({ type: UPLOAD_PHOTO_SUCCESS, photos})

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
    {
        dispatch(setStatus(status));
    }
    else
    {
        dispatch(setStatus('Can\'t load status message from server'));
    }
} 

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const uploadPhoto = (file) => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(file);
    if (response.status === 200)
    {
        dispatch(uploadPhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;