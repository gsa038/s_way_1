import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 's_way_1/auth/SET_USER_DATA';
const SET_CAPTCHA_IRL = 's_way_1/auth/SET_CAPTCHA_IRL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = ( state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
                };
        case SET_CAPTCHA_IRL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
                };
        default:
            return state;
        };
};

export const setAuthUserData = (userId, email, login, isAuth, captchaUrl=null) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth, captchaUrl}});
export const setCaptchaUrl = (captchaUrl=null) => ({type: SET_CAPTCHA_IRL, captchaUrl})

export const getCaptcha = () => async (dispatch) => {
    let response = await authAPI.getCaptcha()
    if (response.data.url) {
        dispatch(setCaptchaUrl(response.data.url));
    }
}

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    };
};

export const doLogin = (email, password, rememberMe, captchaString) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captchaString)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"; 
        dispatch(stopSubmit("login", {_error: message}));
    };
};

export const doLogout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;