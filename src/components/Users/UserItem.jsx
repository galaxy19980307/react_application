import React from "react";
import s from './User.module.css'

const UserItem = (props) => {
    let btnText = props.follow ? 'Unfollow' : 'Follow'
    let btnOnClick = props.follow ? props.onUnfollow : props.onFollow
    return (
        <div className={s.user}>
            <div className={s.avatarUser}>
                <img src={props.img} alt='Размеры не заданы'/>
            </div>
            <div>
                {props.fullName}
            </div>
            <button onClick={() => btnOnClick(props.id)}>
                {btnText}
            </button>
            <div>
                {props.status}
            </div>
            <div>
                {props.location?.country}
            </div>
            <div>
                {props.location?.city}
            </div>
        </div>
    )
}
export default UserItem;