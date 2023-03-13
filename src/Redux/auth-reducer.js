import {authAPI} from "../DAL/authAPI";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER'

let initialState = {
    data: {
        id: null,
        login: null,
        email: null,
        isAuth: false
    },
    isFetching: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // кейс с изменением фоллоу (с булевым значением )
        case SET_AUTH_USER: {
            return {...state, ...action.data}

        }
        default:
            return state;
    }
}

export const setUserAuth = (id, login, email, isAuth) => ({type: SET_AUTH_USER, data: {id, login, email, isAuth}});

export default authReducer;

export const checkAuthThunkCreator = () => async (dispatch) => {
    let data = await authAPI.checkUserAuth()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserAuth(id, login, email, true));
    }
}

export const loginUserThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.loginUser(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(checkAuthThunkCreator());
    } else {
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