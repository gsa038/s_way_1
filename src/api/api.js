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
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {

    authMe() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export default null;