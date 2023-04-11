import {instance} from "./instance";

export const profileAPI = {
    getUserProfile(userId = 27614) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getUserStatus(userId = 27614) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data;
            })
    },
    setUserAvatar(photos) {
        const formData = new FormData();
        formData.append('image', photos);
        return instance.put(`profile/photo`, formData, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            }
        )
            .then(response => {
                return response.data;
            })
    },
    setUserInformation(profile) {
        return instance.put(`profile`, profile)
            .then(response => {
                return response.data;
            })
    }
}