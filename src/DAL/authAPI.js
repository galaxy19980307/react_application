import {instance} from "./instance";

export const authAPI = {
    checkUserAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    loginUser(email, password, rememberMe= false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data;
            })
    },
    logoutUser() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            })
    }
}
