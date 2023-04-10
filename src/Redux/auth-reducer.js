import {authAPI} from "../DAL/authAPI";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER'
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
        case GET_CAPTCHA_URL: {

            return {...state, ...action.payload}
        }

        default:
            return state;
    }
}

export const setUserAuth = (id, login, email, isAuth) => ({type: SET_AUTH_USER, payload: {id, login, email, isAuth}});
export const getCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL, payload: {captchaUrl}});

export default authReducer;

export const checkAuthThunkCreator = () => async (dispatch) => {
    let data = await authAPI.checkUserAuth()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserAuth(id, login, email, true));
    }
}

export const loginUserThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.loginUser(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(checkAuthThunkCreator());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaThunkCreator())
        }
        let message = data.messages?.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutUserThunkCreator = () => async (dispatch) => {
    let data = await authAPI.logoutUser()
    if (data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null, false));
    }
}


export const getCaptchaThunkCreator = () => async (dispatch) => {
    let response = await authAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrl(captchaUrl));
}
