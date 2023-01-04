import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likeQuantity={p.likeQuantity}/>)

    let newPostElement = React.createRef(); // создали переменную с объектом реф (реф объект следит за состоянием объекта)

    const handleAddPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const handleChangePost = () => {
        let newText = newPostElement.current.value;  // получает значение(текст) из текстэрии
        let action = updateNewPostTextActionCreator(newText);
        props.dispatch(action);
    }

    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={handleChangePost} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={handleAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;
