import React from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userNull.png";

const ProfileInfo = ({profile, status, updateUserStatusThunkCreator, owner, setAvatarThunkCreator}) => {

    const handleImageUpload = (event) => {
        if (event.target.files) {
            setAvatarThunkCreator(event.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.avatarDescription}>
                <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt='Нет фото'/>
                <div> {owner ? <input type={"file"} onChange={handleImageUpload}/> : null}
                </div>
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
