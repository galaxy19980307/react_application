import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostReduxForm} from "./PostForm";

const MyPosts = ({postsData, addPostActionCreator}) => {
    let postsElements = postsData.map(p => <Post key={p.id} message={p.message}
                                                 likeQuantity={p.likeQuantity} img={p.img}/>)
    const onAddPost = (values) => {
        addPostActionCreator(values.newPostText);
    }
    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>
            <div>
                <PostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default React.memo(MyPosts);
