import {checkAuthThunkCreator} from "./auth-reducer";

const SET_USER_INITIALIZED = 'SET_USER_INITIALIZED'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        // кейс с изменением фоллоу (с булевым значением )
        case SET_USER_INITIALIZED: {
            return {...state, initialized: true}
        }

        default:
            return state;
    }
}

export const setUserInitialized = () => ({type: SET_USER_INITIALIZED});

export default appReducer;


export const setUserInitializedThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(checkAuthThunkCreator())
        Promise.all([promise]).then(() => {
            dispatch(setUserInitialized())
        })
    }
}