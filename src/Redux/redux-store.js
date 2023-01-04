import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import listOfFriendsReducer from "./listOfFriends-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    listOfFriends: listOfFriendsReducer
});

let store = createStore(reducers);

export default store;
