import {instance} from "./instance";

export const authAPI = {
    checkUserAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
}