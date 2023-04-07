import {profileAPI} from "../DAL/profileAPI";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_INFORMATION = 'SET_USER_INFORMATION';
const SET_USER_AVATAR = 'SET_USER_AVATAR';
const DELETE_POST = 'DELETE_POST';

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
    profile: {
        aboutMe: null,
        contacts: initialStateContact,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: initialStatePhoto
    },
    status: '',
    profileSave: false,

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likeQuantity: 0,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_IB-d9hvImTfdTGctBqEXjIOMhSvSSsBIi1Z5JLyU-h2SLkqb2Kp0SuyCXDhUqMC8J-I&usqp=CAU',
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter((post) => post.id !== action.postId)
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
        case SET_USER_AVATAR: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserAvatar = (photos) => ({type: SET_USER_AVATAR, photos})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const setUserInformation = (profile) => ({type: SET_USER_INFORMATION, profile})
export default profileReducer;

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data));
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data));
}

export const setAvatarThunkCreator = (photos) => async (dispatch) => {
    let data = await profileAPI.setUserAvatar(photos)
    if (data.resultCode === 0) {
        dispatch(setUserAvatar(data.data.photos));
    }
}

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
    let data = await profileAPI.updateUserStatus(status)
    if (data?.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
export const setUserInformationThunkCreator = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let data = await profileAPI.setUserInformation(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfileThunkCreator(userId))
    } else {
        let message = data.messages?.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("profile", {_error: message}))
        return Promise.reject(data.messages[0]);
    }
}