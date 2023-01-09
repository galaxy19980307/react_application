// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import listOfFriendsReducer from "./listOfFriends-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, message: 'Hi everybody!', likeQuantity: 6},
//                 {id: 2, message: 'Are you here?', likeQuantity: 3},
//                 {id: 3, message: 'Nobody love me!', likeQuantity: 0}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Petr'},
//                 {id: 2, name: 'Valentina'},
//                 {id: 3, name: 'Mali'},
//                 {id: 4, name: 'Mum'},
//                 {id: 4, name: 'No name'}
//             ],
//             messagesData: [
//                 {message: 'Hello, i love you!'},
//                 {message: 'Hello, i love you too!'},
//                 {message: 'Hello, baby!'},
//                 {message: 'Hello!'}
//             ],
//             newMessageText: ''
//         },
//         listOfFriends: ''
//     },
//     _callSubscriber() {
//         console.log('State Changed');
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;// паттерн observer - наблюдатель (наблюдает за изменениями)
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.listOfFriends = listOfFriendsReducer(this._state.listOfFriends, action);
//
//         this._callSubscriber(this._state);
//     },
// }
// export default store;
//
//
//
