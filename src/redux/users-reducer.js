const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {id: 1, photoUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", fullname: "Vasiliy S.", status: "I'm studying programming right now...", location: {country: "Russia", city: "SPb"}, isFollowed: true},
        // {id: 2, photoUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", fullname: "Alex M.", status: "I'm studying programming right now to...", location: {country: "Russia", city: "Moscow"}, isFollowed: false},
        // {id: 3, photoUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", fullname: "Andrey A.", status: "And I'm studying programming right now to...", location: {country: "Russia", city: "Rostov-on-Don"}, isFollowed: false},
        // {id: 4, photoUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg", fullname: "Nikolay U.", status: "And I'm studying programming right now to)))...", location: {country: "Belarus", city: "Minsk"}, isFollowed: true}
    ]
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
            return { ...state, users: [ ...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setUserswAC = (users) => ({type: SET_USERS, users})

export default usersReducer;