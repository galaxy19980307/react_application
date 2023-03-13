const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Petr'},
        {id: 2, name: 'Valentina'},
        {id: 3, name: 'Mali'},
        {id: 4, name: 'Mum'},
        {id: 5, name: 'No name'}
    ],
    messagesData: [
        {id: 1, message: 'Hello, i love you!'},
        {id: 2, message: 'Hello, i love you too!'},
        {id: 3, message: 'Hello, baby!'},
        {id: 4, message: 'Hello!'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            // функция добавляет новое сообщение (объект) в список (массив) с сообщениями (объектами) и обнуляет newMessageText
            let newMessage = {
                id: state.messagesData.length + 1,
                message: action.newMessageBody,
            };
            return { // возвращается копия стейта
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        }
        default:
            return state;
    }
}
export default dialogsReducer;

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});
