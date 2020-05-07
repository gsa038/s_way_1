import axios from 'axios'
import { ProfileType } from '../types/types'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "40a499b6-4421-4c8e-b336-09492ab319c5"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    follow(follow: boolean, userId: number) {
        return (follow ? instance.post(`follow/${userId}`) : instance.delete(`follow/${userId}`))
            .then(response => response.data)
    },
    getProfile(userId: number) {
        console.warn("Obsolete method. Please use ProfileAPI object for getProfile")
        return profileAPI.getProfile(userId)
    }
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

type AuthMeResponseType = {
    data: { 
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: { 
        userId: number
    }
    resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum
    messages: Array<string>
}


export const authAPI = {
    authMe() {
        return instance.get<AuthMeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captchaString: string | null = null) {
        return instance.post<LoginResponseType>('/auth/login', {email: email, password: password, rememberMe: rememberMe, captcha: captchaString}).then(res => res.data)
    },
    logout() {
        return instance.delete('/auth/login')
    },
    getCaptcha() {
        return instance.get('/security/get-captcha-url')
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status/', {status: status})
    },
    uploadPhoto(photo: BinaryType) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put('profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipath/form-data'
            }
        })
    },
    saveProfile(profileData: ProfileType) {
        return instance.put('profile', profileData )
    }
}

export default null