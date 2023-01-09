const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            if (state.newMessageText) {
                // функция добавляет новое сообщение (объект) в список (массив) с сообщениями (объектами) и обнуляет newMessageText
                let newMessage = {
                    id: 5,
                    message: state.newMessageText,
                }
                stateCopy.messagesData = [...state.messagesData]
                stateCopy.messagesData.push(newMessage);
                stateCopy.newMessageText = ''
            }
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            // функция сохраняет в стэйт новое введенное значение, которое ввели в текстэрии
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }
        default:
            return state;
    }
}
export default dialogsReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (newMessage) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage});