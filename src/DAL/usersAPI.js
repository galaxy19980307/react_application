import {instance} from "./Instance";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    followUser(id = 1) {
        return instance.delete(`/follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowUser(id = 1) {
        return instance.post(`/follow/${id}`)
            .then(response => {
                return response.data;
            })
    }
}