import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.profilePage.postsData.map(p => <Post key={p.id} message={p.message} likeQuantity={p.likeQuantity} img={p.img}/>)

    let newPostElement = React.createRef(); // создали переменную с объектом реф (реф объект следит за состоянием объекта)

    const onAddPost = () => {
        props.handleAddPost();
    }
    const onChangePost = () => {
        let newText = newPostElement.current.value;  // получает значение(текст) из текстэрии
        props.handleChangePost(newText);

    }
    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} ref={newPostElement} value={props.profilePage.newPostText}/>
                </div>
                    <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;
