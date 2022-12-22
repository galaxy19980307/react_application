import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likeQuantity={p.likeQuantity}/>)

    let newPostElement = React.createRef();

    const handleAddPost = () => {
        props.addPost();
    }

    let onPostChange= () => {
        let text= newPostElement.current.value;
        props.updateNewPostText(text);


    }
    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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
