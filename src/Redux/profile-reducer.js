import {profileAPI} from "../DAL/profileAPI";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialStateContact = {
    facebook: null,
    website: null,
    vk: null,
    twitter: null,
    instagram: null,
    youtube: null,
    github: null,
    mainLink: null
}
let initialStatePhoto = {
    small: null,
    large: null,
}
let initialState = {
    postsData: [
        {
            id: 1,
            message: 'Hi everybody!',
            likeQuantity: 6,
            img: 'https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=2000'
        },
        {
            id: 2,
            message: 'Are you here?',
            likeQuantity: 3,
            img: 'https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg?w=2000'
        },
        {
            id: 3,
            message: 'Nobody love me!',
            likeQuantity: 0,
            img: 'https://i.pinimg.com/originals/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg'
        }
    ],
    newPostText: '',
    profile: {
        aboutMe: null,
        contacts: initialStateContact,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: initialStatePhoto
    },
    status: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likeQuantity: 0,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IB-d9hvImTfdTGctBqEXjIOMhSvSSsBIi1Z5JLyU-h2SLkqb2Kp0SuyCXDhUqMC8J-I&usqp=CAU',
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export default profileReducer;

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 27614;
        }
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export const getUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data));
            })
    }
}
export const updateUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(data => {
                if (data?.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            })
    }
}
