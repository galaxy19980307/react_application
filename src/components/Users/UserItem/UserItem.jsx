import React from "react";
import s from './User.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/userNull.png";


const UserItem = (props) => {
    let btnText = props.followed ? 'Unfollow' : 'Follow'
    return (
        <div className={s.user}>
            <div className={s.avatarUser}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos != null ? props.photos : userPhoto} alt='Нет фото'/>
                </NavLink>
            </div>
            <div>
                {props.name}
            </div>
            <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                props.changeFollowThunkCreator(props.followed, props.id)}
            }> {btnText}
            </button>
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