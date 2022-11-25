import React from "react";
import s from './Post.module.css'
import Like from "../../../Like/Like";


const Post = (props) => {
    console.log(props);
    return (
        <div>
            <div className={s.item}>
                <img src='avatar.jpg'/>
                {props.message}
            </div>
            <Like likeQuantity={props.likeQuantity}/>
        </div>
    )
}
export default Post;
