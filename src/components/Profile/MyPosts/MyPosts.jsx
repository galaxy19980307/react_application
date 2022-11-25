import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button >Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi everybody!'} likeQuantity={6}/>
                <Post message={'Are you here?'} likeQuantity={3}/>
                <Post message={'Nobody love me!'} likeQuantity={0} />
            </div>
            <input placeholder='cool' type='reset' value={'отправить'}/>
        </div>

    )
}
export default MyPosts;
