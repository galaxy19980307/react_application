import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    console.log(props)
    return (
        <div>
            <div className={s.profileInfo}>
                <img src='https://oir.mobi/uploads/posts/2021-03/1616557543_13-p-yarkii-fon-dlya-prezentatsii-13.jpg'/>
            </div>
            <div className={s.avatarDescription}>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={s.fullName}>
                {props.profile.fullName}
            </div>
            <div>
                {props.profile.contacts.vk}
            </div>

        </div>
    )
}

export default ProfileInfo;
