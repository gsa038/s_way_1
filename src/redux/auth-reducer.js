import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 's_way_1/auth/SET_USER_DATA';
const GET_CAPTCHA_IRL = 's_way_1/auth/GET_CAPTCHA_IRL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //if null then captcha is not required
};

const authReducer = ( state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_IRL:
            return {
                ...state,
                ...action.payload
                };
        default:
            return state;
        };
};

export const setAuthUserData = (userId, email, login, isAuth, captchaUrl=null) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth, captchaUrl}});
export const getCaptchaUrl = (captchaUrl=null) => ({type: GET_CAPTCHA_IRL, payload: {captchaUrl}});

export const getCaptcha = () => async (dispatch) => {
    const response = await authAPI.getCaptcha()
    if (response.data.url) {
        dispatch(getCaptchaUrl(response.data.url));
    }
}

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    };
};

export const doLogin = (email, password, rememberMe, captchaString) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captchaString)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"; 
        dispatch(stopSubmit("login", {_error: message}));
    };
};

export const doLogout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;