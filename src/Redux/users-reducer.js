const CHANGE_FOLLOW = 'CHANGE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE_USERS = 'SET_PAGE_USERS'
const SAVE_USERS_TOTAL_COUNT = 'SAVE_USERS_TOTAL_COUNT'
const IS_LOADING = 'IS_LOADING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // кейс с изменением фоллоу (с булевым значением )
        case CHANGE_FOLLOW: {
            let stateCopy = {...state}
            stateCopy.users = state.users.map(user => {
                if (action.userId === user.id) {
                    user.followed = !user.followed
                }
                return user;
            })
            return stateCopy;
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_PAGE_USERS: {
            return {...state, currentPage: action.currentPage}
        }
        case SAVE_USERS_TOTAL_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case IS_LOADING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const changeFollow = (userId) => ({type: CHANGE_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPageUsers = (currentPage) => ({type: SET_PAGE_USERS, currentPage})
export const saveUsersTotalCount = (totalCount) => ({type: SAVE_USERS_TOTAL_COUNT, totalCount})
export const isLoading = (isFetching) => ({type: IS_LOADING, isFetching})
export const setFollowingProgress = (followingInProgress, userId) => ({
    type: SET_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})
export default usersReducer;