import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import listOfFriendsReducer from "./listOfFriends-reducer";
import usersReducer from "./users-reducer";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    listOfFriends: listOfFriendsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
