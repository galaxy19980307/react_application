import {rerenderEntireTree} from "../Render/render";

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi everybody!', likeQuantity: 6},
            {id: 2, message: 'Are you here?', likeQuantity: 3},
            {id: 3, message: 'Nobody love me!', likeQuantity: 0}
        ],
        newPostText: 'Whatsssaaap'
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
        ]
    },
    listOfFriends: [
        {friend: 'Petr'},
        {friend: 'Valentina'},
        {friend: 'Mali'},
        {friend: 'Mum  '}
    ]
}
export let addPost = () => {
    // функция добавляет новый пост (объект) в список (массив) с постами (объектами) и обнуляет newPostText
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likeQuantity: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    // функция сохраняет в стэйт новое введенное значение, которое ввели в текстэрии
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;



