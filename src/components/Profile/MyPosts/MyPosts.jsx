import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.profilePage.postsData.map(p => <Post key={p.id} message={p.message} likeQuantity={p.likeQuantity} img={p.img}/>)

       const PostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter your post'} name={"newPostText"} component={"textarea"}/>
                </div>
                <button>Add Post</button>
            </form>
        )
    }
    const PostReduxForm = reduxForm({form: 'AddPost'})(PostForm)
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
export default MyPosts;
