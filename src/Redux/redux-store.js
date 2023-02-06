import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import listOfFriendsReducer from "./listOfFriends-reducer";
import usersReducer from "./users-reducer";
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    listOfFriends: listOfFriendsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;
