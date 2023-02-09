import {authAPI} from "../DAL/authAPI";

const SET_AUTH_USER = 'SET_AUTH_USER'


let initialState = {
    data: {
        id: null,
        login: null,
        email: null,
        isAuth : false
    }
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // кейс с изменением фоллоу (с булевым значением )
        case SET_AUTH_USER: {
            return {...state, ...action.data, isAuth : true}

        }
        default:
            return state;
    }
}

export const setUserAuth = (id,login,email) => ({type: SET_AUTH_USER, data: {id,login,email}});

export default authReducer;

export const checkAuthThunkCreator= () => {
    return (dispatch) => {
        authAPI.checkUserAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserAuth(id, login, email));
                }
            })
    }
}