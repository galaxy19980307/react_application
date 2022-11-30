import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileInfo}>
                <img src='https://oir.mobi/uploads/posts/2021-03/1616557543_13-p-yarkii-fon-dlya-prezentatsii-13.jpg'/>
            </div>
            <div className={s.avatarDescription}>
                Avatar + Description
            </div>
        </div>
    )
}

export default ProfileInfo;
