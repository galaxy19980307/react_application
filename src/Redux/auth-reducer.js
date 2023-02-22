import {authAPI} from "../DAL/authAPI";

const SET_AUTH_USER = 'SET_AUTH_USER'


let initialState = {
    data: {
        id: null,
        login: null,
        email: null,
        isAuth: false
    }
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

export const checkAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.checkUserAuth()
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
        authAPI.loginUser(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(checkAuthThunkCreator());
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