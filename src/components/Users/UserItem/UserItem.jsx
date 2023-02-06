import React from "react";
import s from './User.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

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
            <button onClick={() => {
                props.followed ?
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                        {
                            withCredentials: true
                        })
                        .then(response => {
                            if (response.data?.resultCode === 0) {
                                props.changeFollow(props.id)
                            }
                        })
                    : axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {},
                        {
                            withCredentials: true
                        })
                        .then(response => {
                            if (response.data?.resultCode === 0) {
                                props.changeFollow(props.id)
                            }
                        })
            }
            }> {btnText}
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