const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 3
}

const usersReducer = ( state = initialState, action) => {

    switch(action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, isFollowed: !u.isFollowed}
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
        default:
            return state;
    }
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setUserswAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})



export default usersReducer;