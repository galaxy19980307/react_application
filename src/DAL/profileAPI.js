import {instance} from "./Instance";

export const profileAPI = {
    getUserProfile(userId = 1) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
}