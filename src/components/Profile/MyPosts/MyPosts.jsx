import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostReduxForm} from "./PostForm";

const MyPosts = (props) => {
    let postsElements = props.postsData.map(p => <Post key={p.id} message={p.message}
                                                       likeQuantity={p.likeQuantity} img={p.img}/>)
    const onAddPost = (values) => {
        props.handleAddPost(values.newPostText);
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
