import React from "react";
import s from './Like.module.css'


const Like = (props) => {
    return (
        <div className={s.colour}>
            <span> &#10084; </span>
            {props.likeQuantity}
        </div>
    )
}
export default Like;
