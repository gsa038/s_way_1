import {usersAPI} from '../api/api';

const TOGGLE_FOLLOW = 's_way_1/users/TOGGLE_FOLLOW'
const SET_USERS = 's_way_1/users/SET_USERS'
const SET_CURRENT_PAGE = 's_way_1/users/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 's_way_1/users/SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 's_way_1/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 's_way_1/users/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = ( state = initialState, action) => {

    switch(action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                // NOT WORK with updateObjectInArray from objects-helper.js // 90-redux-ducks video
                // users: updateObjectInArray(state.users, action.userId, 'id', !state.users[action.userId].followed)
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                return u;
                })            
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state, 
                followingInProgress: action.followingInProgress 
                ? [...state.followingInProgress, action.userId]
                : [state.followingInProgress.filter(id => id !== action.userId)]}
        }
        default:
            return state;
    }
}

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (followingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})

export const getUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const follow = (follow, userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await usersAPI.follow(follow, userId);
    if (data.resultCode === 0 || 1) {
        dispatch(toggleFollow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export default usersReducer;