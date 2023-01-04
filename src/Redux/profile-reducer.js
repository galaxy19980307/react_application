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

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                let newPost = {
                    id: 4,
                    message: state.newPostText,
                    likeQuantity: 0
                }
                state.postsData.push(newPost);
                state.newPostText = ' '
            }
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export default profileReducer;
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});