import React from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateUserStatusThunkCreator}) => {
    return (
        <div>
            <div className={s.avatarDescription}>
                <img src={profile.photos.large}/>
            </div>
            <div className={s.fullName}>
                {profile.fullName}
            </div>
            <div>
                <ProfileStatusWithHooks status={status}
                                        updateUserStatusThunkCreator={updateUserStatusThunkCreator}/>
            </div>
            <div>
                {profile.contacts.vk}
            </div>
        </div>
    )
}

export default ProfileInfo;
