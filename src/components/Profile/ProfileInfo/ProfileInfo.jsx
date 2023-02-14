import React from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.avatarDescription}>
                <img src={"https://sun9-33.userapi.com/impg/b_R4ZHwyMIYCcFw8iMH6v15PaoLpAOMtgGgDvQ/_wJK3hLQ1ls.jpg?size=1620x2160&quality=96&sign=612e5ac298f9b8e8471d2b9cad98486c&type=album"}/>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={s.fullName}>
                {props.profile.fullName}
            </div>
            <div>
                {props.profile.contacts.vk}
            </div>
            <ProfileStatus status={"Hello, my friend!"}/>
        </div>
    )
}

export default ProfileInfo;
