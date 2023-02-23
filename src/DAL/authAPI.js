import {instance} from "./instance";

const authEndpoint = "auth"
export const authAPI = {
    checkUserAuth() {
        return instance.get(`${authEndpoint}/me`)
            .then(response => {
                return response.data;
            })
    },
    loginUser(email, password, rememberMe= false) {
        return instance.post(`${authEndpoint}/login`, {email, password, rememberMe})
            .then(response => {
                return response.data;
            })
    },
    logoutUser() {
        return instance.delete(`${authEndpoint}/login`)
            .then(response => {
                return response.data;
            })
    }
}
