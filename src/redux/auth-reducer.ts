import { authAPI } from "../api/api"
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 's_way_1/auth/SET_USER_DATA'
const GET_CAPTCHA_IRL = 's_way_1/auth/GET_CAPTCHA_IRL'

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null 
};

type InitialStateType = typeof initialState

type SetAuthUserDataPayloadType = InitialStateType
type SetAuthUserDataActionType = {type: typeof SET_USER_DATA, payload: SetAuthUserDataPayloadType}
type GetCaptchaUrlActionType = {type: typeof GET_CAPTCHA_IRL, payload: {captchaUrl: string}}

type ActionTypes =  SetAuthUserDataActionType |
                    GetCaptchaUrlActionType

const authReducer = ( state = initialState, action: ActionTypes): InitialStateType => {

    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_IRL:
            return {
                ...state,
                ...action.payload
                };
        default:
            return state
        };
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null = null): SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth, captchaUrl}})
export const getCaptchaUrl = (captchaUrl: string | null = null) => ({type: GET_CAPTCHA_IRL, payload: {captchaUrl}})

export const getCaptcha = () => async (dispatch: Function) => {
    const response = await authAPI.getCaptcha()
    if (response.data.url) {
        dispatch(getCaptchaUrl(response.data.url))
    }
}

export const getAuthUserData = () => async (dispatch: Function) => {
    const response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    };
};

export const doLogin = (email: string, password: string, rememberMe: boolean, captchaString: string) => async (dispatch: Function) => {
    const response = await authAPI.login(email, password, rememberMe, captchaString)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    };
};

export const doLogout = () => async (dispatch: Function) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export default authReducer