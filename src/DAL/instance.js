import axios from "axios";

 export const instance = axios.create(
    {
        withCredentials: true,
        headers: {
            "API-KEY": "5d049bd3-d966-454d-bf97-d37b91377d7c"
        },
        baseURL: `https://social-network.samuraijs.com/api/1.0/`
    }
);