import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (postsData) => {

    let postsElements = postsData.map(p=> <Post message={p.message} likeQuantity={p.likeQuantity}/>)

    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
            <input placeholder='cool' type='reset' value={'отправить'}/>
        </div>

    )
}
export default MyPosts;
