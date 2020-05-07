import { authAPI, ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api"
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

export type AuthStateType = typeof initialState

type SetAuthUserDataPayloadType = AuthStateType
type SetAuthUserDataActionType = {type: typeof SET_USER_DATA, payload: SetAuthUserDataPayloadType}
type GetCaptchaUrlActionType = {type: typeof GET_CAPTCHA_IRL, payload: {captchaUrl: string}}

type ActionTypes =  SetAuthUserDataActionType |
                    GetCaptchaUrlActionType

const authReducer = ( state = initialState, action: ActionTypes): AuthStateType => {

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
    const authMeData = await authAPI.authMe()
    if (authMeData.resultCode === ResultCodeEnum.Success) {
        const {id, login, email} = authMeData.data;
        dispatch(setAuthUserData(id, email, login, true))
    };
};

export const doLogin = (email: string, password: string, rememberMe: boolean, captchaString: string) => async (dispatch: Function) => {
    const loginData = await authAPI.login(email, password, rememberMe, captchaString)
    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData())
    }
    else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptcha())
        }
        const message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
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