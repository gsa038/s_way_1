import { profileAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
import { PostType, ProfileType, PhotosType } from "../types/types";
import { ThunkAction } from "redux-thunk";

const ADD_POST = 's_way_1/pofile/ADD_POST'
const DELETE_POST = 's_way_1/pofile/DELETE_POST'
const SET_USER_PROFILE = 's_way_1/pofile/SET_USER_PROFILE'
const SET_STATUS = 's_way_1/pofile/SET_STATUS'
const UPLOAD_PHOTO_SUCCESS = 's_way_1/pofile/UPLOAD_PHOTO_SUCCESS'

export type ProfileStateType = {
    posts: Array<PostType>,
    status: string | null,
    userProfile: ProfileType | null,
    newPostText: string | null,
    photos?: PhotosType
}

let initialState: ProfileStateType = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCounts: 15 },
        { id: 2, message: "It's my first post", likesCounts: 20 },
        { id: 3, message: "BlaBla", likesCounts: 30 },
        { id: 4, message: "Lala", likesCounts: 40 }
    ],
    status: null,
    userProfile: null, 
    newPostText: null
}

type AddPostActionType = { type: typeof ADD_POST, newPostText: string}
type DeletePostActionType = { type: typeof DELETE_POST, postId: number}
type SetUserProfilleActionType = { type: typeof SET_USER_PROFILE, userProfile: ProfileType}
type SetStatusActionType = { type: typeof SET_STATUS, status: string}
type UploadPhotoSuccessType = { type: typeof UPLOAD_PHOTO_SUCCESS, photos: PhotosType}

type ActionTypes =  AddPostActionType |
                            DeletePostActionType |
                            SetUserProfilleActionType |
                            SetStatusActionType |
                            UploadPhotoSuccessType

type ThunkType = ThunkAction<Promise<void>, ProfileStateType, unknown, ActionTypes>

const profileReducer = (state: ProfileStateType = initialState, action: ActionTypes) => {
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

export const addPost = (newPostText: string): AddPostActionType =>  ({ type: ADD_POST, newPostText })
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})
export const setUserProfile = (userProfile: ProfileType): SetUserProfilleActionType =>  ({ type: SET_USER_PROFILE, userProfile })
export const setStatus = (status: string): SetStatusActionType =>  ({ type: SET_STATUS, status })
export const uploadPhotoSuccess = (photos: PhotosType): UploadPhotoSuccessType => ({ type: UPLOAD_PHOTO_SUCCESS, photos})

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch: Function) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const uploadPhoto = (file: BinaryType): ThunkType => async (dispatch: Function) => {
    const response = await profileAPI.uploadPhoto(file);
    if (response.status === 200)
    {
        dispatch(uploadPhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profileData: ProfileType): ThunkType => async (dispatch: Function, getState: any) => {
    console.log(profileData)
    const response = await profileAPI.saveProfile(profileData);
    console.log(response)
    if (response.data.resultCode === 0)
    {        
        dispatch(getUserProfile(getState().auth.userId))
    }
    else 
    {
        var errors = {};
        response.data.messages.forEach((message: string) => {
            errors[/(?<=Contacts->)[A-z]+/.exec(message)![0].toLowerCase()] = message;
        })
        response.data.messages && dispatch(stopSubmit("editProfile", {"contacts": errors}));
        return Promise.reject();
    };
}

export const updateStatus = (status: string): ThunkType => async (dispatch: Function) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0)
        {
            dispatch(setStatus(status));
        }
        else
        {
            dispatch(setStatus('Can\'t load status message from server'));
        }
    }
    catch(error) {
//
    }
}

export default profileReducer;