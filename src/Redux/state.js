const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE= 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT= 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi everybody!', likeQuantity: 6},
                {id: 2, message: 'Are you here?', likeQuantity: 3},
                {id: 3, message: 'Nobody love me!', likeQuantity: 0}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Petr'},
                {id: 2, name: 'Valentina'},
                {id: 3, name: 'Mali'},
                {id: 4, name: 'Mum'},
                {id: 4, name: 'No name'}
            ],
            messagesData: [
                {message: 'Hello, i love you!'},
                {message: 'Hello, i love you too!'},
                {message: 'Hello, baby!'},
                {message: 'Hello!'}
            ],
            newMessageText: ''
        },
        listOfFriends: [
            {friend: 'Petr'},
            {friend: 'Valentina'},
            {friend: 'Mali'},
            {friend: 'Mum  '}
        ]
    },
    _callSubscriber() {
        console.log('State Changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;// паттерн observer - наблюдатель (наблюдает за изменениями)
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                if (this._state.profilePage.newPostText) {
                    let newPost = {
                        id: 4,
                        message: this._state.profilePage.newPostText,
                        likeQuantity: 0
                    }
                    this._state.profilePage.postsData.push(newPost);
                    this._state.profilePage.newPostText = ' '
                    this._callSubscriber(this._state);
                }
                break;
            case 'UPDATE-NEW-POST-TEXT' :
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case 'ADD-MESSAGE':
                if (this._state.dialogsPage.newMessageText) {
                    // функция добавляет новое сообщение (объект) в список (массив) с сообщениями (объектами) и обнуляет newMessageText
                    let newMessage = {
                        id: 5,
                        message: this._state.dialogsPage.newMessageText,
                    }
                    this._state.dialogsPage.messagesData.push(newMessage);
                    this._state.dialogsPage.newMessageText = ''
                    this._callSubscriber(this._state);
                }
                break;
            case 'UPDATE-NEW-MESSAGE-TEXT':
                // функция сохраняет в стэйт новое введенное значение, которое ввели в текстэрии
                this._state.dialogsPage.newMessageText = action.newMessage;
                this._callSubscriber(this._state);
                break;
        }
    },
}
export default store;

export const addPostActionCreator= () => ({type: ADD_POST});
export const updateNewPostTextActionCreator=(newText) =>({type: UPDATE_NEW_POST_TEXT, newText});
export const addMessageActionCreator=()=> ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator=(newMessage) =>({type: UPDATE_NEW_MESSAGE_TEXT, newMessage});



