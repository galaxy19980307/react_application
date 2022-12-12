import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData= [
    {message:'Hi everybody!', likeQuantity:6},
    {message:'Are you here?', likeQuantity:3},
    {message:'Nobody love me!', likeQuantity:0}
]

let dialogsData = [
    {id: 1, name: 'Petr'},
    {id: 2, name: 'Valentina'},
    {id: 3, name: 'Mali'},
    {id: 4, name: 'Mum'}
]
let messagesData = [
    {message: 'Hello, i love you!'},
    {message: 'Hello, i love you too!'},
    {message: 'Hello, baby!'},
    {message: 'Hello!'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
