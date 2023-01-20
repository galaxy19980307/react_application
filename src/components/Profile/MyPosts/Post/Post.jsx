import React from "react";
import s from './Post.module.css'
import Like from "../../../Like/Like";


const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div>
                <img src={props.img} alt='Размеры не заданы'/>
                </div>
                {props.message}
            </div>
            <Like likeQuantity={props.likeQuantity}/>
        </div>
    )
}
export default Post;
