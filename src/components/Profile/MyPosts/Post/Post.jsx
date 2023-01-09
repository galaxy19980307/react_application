import React from "react";
import s from './Post.module.css'
import Like from "../../../Like/Like";


const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img alt='Фото профиля' src='avatar.jpg'/>
                {props.message}
            </div>
            <Like likeQuantity={props.likeQuantity}/>
        </div>
    )
}
export default Post;
