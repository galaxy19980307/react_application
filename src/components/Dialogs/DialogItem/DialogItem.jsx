import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
            <div className={s.avatarStyle}>
                <img src={'http://www.rosphoto.com/images/u/articles/1510/7_5.jpg'}/>
            </div>
        </div>

    )
}

export default DialogItem;
