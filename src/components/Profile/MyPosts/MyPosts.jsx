import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let PostsData= [
        {message:'Hi everybody!', likeQuantity:6},
        {message:'Are you here?', likeQuantity:3},
        {message:'Nobody love me!', likeQuantity:0}
    ]

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
                <Post message={PostsData[0].message} likeQuantity={PostsData[0].likeQuantity}/>
                <Post message={PostsData[1].message} likeQuantity={PostsData[1].likeQuantity}/>
                <Post message={PostsData[2].message} likeQuantity={PostsData[2].likeQuantity}/>
            </div>
            <input placeholder='cool' type='reset' value={'отправить'}/>
        </div>

    )
}
export default MyPosts;
