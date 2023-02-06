import {instance} from "./Instance";

export const authAPI = {
    checkUserAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
}