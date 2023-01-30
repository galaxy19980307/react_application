const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE_USERS = 'SET_PAGE_USERS'
const SAVE_USERS_TOTAL_COUNT = 'SAVE_USERS_TOTAL_COUNT'
/*const CHANGE_FOLLOW = "CHANGE_FOLLOW";*/

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // кейс с изменением фоллоу (с булевым значением )
        // case CHANGE_FOLLOW: {
        //     let stateCopy = {...state}
        //     stateCopy.users = state.users.map(user => {
        //         if (action.userId === user.id) {
        //             user.follow = !user.follow
        //         }
        //         return user;
        //     })
        //     return stateCopy;
        // }
        case FOLLOW: {
            let stateCopy = {...state}
            stateCopy.users = stateCopy.users.map(user => {
                if (action.userId === user.id) {
                    user.followed = true
                }
                return user;
            })

            return stateCopy;
        }

        case UNFOLLOW: {
            let stateCopy = {...state}
            stateCopy.users = stateCopy.users.map(user => {
                if (action.userId === user.id) {
                    user.followed = false
                }
                return user;
            })
            return stateCopy;
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_PAGE_USERS: {
            return {...state,  currentPage:action.currentPage}
        }
        case SAVE_USERS_TOTAL_COUNT: {
            return {...state, totalCount:action.totalCount}
        }
         // другие варианты с мапом и иф
        // let stateCopy = {
        //     ...state,
        //     users: state.users.map(user => {
        //             if (action.userId === user.id) {
        //                 user.follow = true
        //             }
        //             return user;
        //         }
        //     )
        // }
        // return stateCopy
        // ##########################
        // return {
        //     ...state,
        //     users: state.users.map(user => {
        //             if (action.userId === user.id) {
        //                 user.follow = true
        //             }
        //             return user;
        //         }
        //     )
        // }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
/*export const changeFollowAC = (userId) => ({type: CHANGE_FOLLOW, userId});*/
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setPageUsersAC = (currentPage) => ({type: SET_PAGE_USERS, currentPage})
export const saveUsersTotalCountAC = (totalCount) => ({type: SAVE_USERS_TOTAL_COUNT, totalCount})
export default usersReducer;