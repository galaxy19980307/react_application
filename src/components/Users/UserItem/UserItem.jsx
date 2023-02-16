import React from "react";
import s from './User.module.css'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    let btnText = props.followed ? 'Unfollow' : 'Follow'
    return (
        <div className={s.user}>
            <div className={s.avatarUser}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos != null ? props.photos : 'logo.jpg'} alt='Нет авки'/>
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