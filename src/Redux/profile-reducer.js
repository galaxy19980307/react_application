const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi everybody!', likeQuantity: 6},
        {id: 2, message: 'Are you here?', likeQuantity: 3},
        {id: 3, message: 'Nobody love me!', likeQuantity: 0}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            if (state.newPostText) {
                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    likeQuantity: 0
                }
                stateCopy.postsData = [...state.postsData]
                stateCopy.postsData.push(newPost);
                stateCopy.newPostText = ''
            }
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});
export default profileReducer;