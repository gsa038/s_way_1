import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "40a499b6-4421-4c8e-b336-09492ab319c5"
    }
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    follow(follow, userId) {
        return (follow ? instance.post(`follow/${userId}`) : instance.delete(`follow/${userId}`))
            .then(response => response.data)
    }
}

export default null;