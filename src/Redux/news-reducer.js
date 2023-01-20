const ADD_NEWS = 'ADD_NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE_NEW_NEWS_TEXT';

let initialState = {
    newsData: [
        {id: 1, by: 'Petr', name: 'Petr changed avatar', publishTime: '5pm', img: ''},
        {id: 2, by: 'Uliana', name: 'Uliana shared photo', publishTime: '10am', img: ''},
        {id: 3, by: 'Valya', name: 'Valya liked your post', publishTime: '1pm', img: ''},
    ],
    newNewsText: ''
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS: {
            let newNews = {
                id: state.newsData.length + 1,
                by: 'Me',
                name: state.newNewsText,
            };
            return {
                ...state,
                newsData: [...state.newsData, newNews],
                newNewsText: ''
            }
        }
        case UPDATE_NEW_NEWS_TEXT: {
            let stateCopy = {...state}
            stateCopy.newNewsText= action.newNews;
            return stateCopy;
        }
        default:
            return state;
    }
}
export default newsReducer;

export const addNewsAC = () => ({type: ADD_NEWS});
export const updateNewNewsTextAC = (newNews) => ({type: UPDATE_NEW_NEWS_TEXT, newNews});