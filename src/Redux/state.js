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
                {id: 4, name: 'Mum'}
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

    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State Changed');
    },
    addPost() {
        // функция добавляет новый пост (объект) в список (массив) с постами (объектами) и обнуляет newPostText
        if (this._state.profilePage.newPostText) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likeQuantity: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        }
    },
    updateNewPostText(newText) {
        // функция сохраняет в стэйт новое введенное значение, которое ввели в текстэрии
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;// паттерн observer - наблюдатель (наблюдает за изменениями)
    },
    addMessage() {
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

    },
    updateNewMessageText(newMessage) {
        // функция сохраняет в стэйт новое введенное значение, которое ввели в текстэрии
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
}

export default store;



