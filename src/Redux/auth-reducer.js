import {authAPI} from "../DAL/authAPI";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER'
const IS_LOADING = 'IS_LOADING'

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
        case IS_LOADING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const setUserAuth = (id, login, email, isAuth) => ({type: SET_AUTH_USER, data: {id, login, email, isAuth}});
export const isLoading = (isFetching) => ({type: IS_LOADING, isFetching})

export default authReducer;

export const checkAuthThunkCreator = () => {
    return (dispatch) => {
        return authAPI.checkUserAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserAuth(id, login, email, true));
                }
            })
    }
}
export const loginUserThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        authAPI.loginUser(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(checkAuthThunkCreator());
                    dispatch(isLoading(false))
                }
                else {
                    let message= data.messages?.length > 0 ? data.messages[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: message }))
                }
            })
    }
}
export const logoutUserThunkCreator = () => {
    return (dispatch) => {
        authAPI.logoutUser()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserAuth(null, null, null, false));
                }
            })
    }
}