import axios from 'axios'
import { ProfileType, UserType, PhotosType } from '../types/types'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "40a499b6-4421-4c8e-b336-09492ab319c5"
    }
})

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

type ErrorResponseStandardType = {message: string}

type GetUsersResponseType = {
    items: Array<UserType>,
    totalUsersCount: number,
    error: string
}

type FollowResponseType = {
    resultCode: ResultCodeEnum,
    messages: Array<string>
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    follow(follow: boolean, userId: number) {
        return (follow ? instance.post<FollowResponseType>(`follow/${userId}`) : instance.delete<FollowResponseType>(`follow/${userId}`))
            .then(response => response.data)
    },
    getProfile(userId: number) {
        console.warn("Obsolete method. Please use ProfileAPI object for getProfile")
        return profileAPI.getProfile(userId)
    }
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

type LogoutResponseType = {
    resultCode: ResultCodeEnum
}

type GetCaptchaResponseType = {
    url: string
}

export const authAPI = {
    authMe() {
        return instance.get<AuthMeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captchaString: string | null = null) {
        return instance.post<LoginResponseType>('/auth/login', {email: email, password: password, rememberMe: rememberMe, captcha: captchaString}).then(res => res.data)
    },
    logout() {
        return instance.delete<LogoutResponseType>('/auth/login')
    },
    getCaptcha() {
        return instance.get<GetCaptchaResponseType>('/security/get-captcha-url')
    }
}

type GetProfileResponseType = ProfileType | ErrorResponseStandardType

type GetStatusResponseType = string | ErrorResponseStandardType

type UpdateStatusResponseType = {
    resultCode: ResultCodeEnum,
    messages: Array<string>,
    data : {
    }
}

type UploadFotoResponseType = {
    data: PhotosType,
    resultCode: ResultCodeEnum,
    messages: Array<string>
}

type SaveProfileResponseType = {
    data: ProfileType,
    resultCode: ResultCodeEnum,
    messages: Array<string>
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<GetProfileResponseType>(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get<GetStatusResponseType>('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusResponseType>('profile/status/', {status: status})
    },
    uploadPhoto(photo: BinaryType) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<UploadFotoResponseType>('profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipath/form-data'
            }
        })
    },
    saveProfile(profileData: ProfileType) {
        return instance.put<SaveProfileResponseType>('profile', profileData )
    }
}

export default null