import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "40a499b6-4421-4c8e-b336-09492ab319c5"
    }
});

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    follow(follow, userId) {
        return (follow ? instance.post(`follow/${userId}`) : instance.delete(`follow/${userId}`))
            .then(response => response.data)
    },
    getProfile(userId) {
        console.warn("Obsolete method. Please use ProfileAPI object for getProfile")
        return profileAPI.getProfile(userId)
    }
}

export const authAPI = {

    authMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe=false, captchaString) {
        return instance.post('/auth/login', {email: email, password: password, rememberMe: rememberMe, captcha: captchaString});
    },
    logout() {
        return instance.delete('/auth/login');
    },
    getCaptcha() {
        return instance.get('/security/get-captcha-url')
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status});
    },
    uploadPhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put('profile/photo/', formData, {
            'Content-Type': 'multipath/form-data'
        })
    }
}

export default null;