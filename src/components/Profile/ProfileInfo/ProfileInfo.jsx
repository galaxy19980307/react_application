import React from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.avatarDescription}>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={s.fullName}>
                {props.profile.fullName}
            </div>
            <div>
                <ProfileStatus status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
            </div>
            <div>
                {props.profile.contacts.vk}
            </div>
        </div>
    )
}

export default ProfileInfo;
