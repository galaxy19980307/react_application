import React from "react";
import s from "./New.module.css"

const New = (props) => {
    return (
        <div className={s.new}>
            <div>
                {props.name}
            </div>
            <div>
                <img src={props.img} alt='Картинка'/>
            </div>
            <div>
                {props.by}
            </div>
            <div>
                {props.publishTime}
            </div>
        </div>
    )
}
export default New;
