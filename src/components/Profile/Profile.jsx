import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";



const Profile = ({profile, status, updateUserStatusThunkCreator, owner,
                     setAvatarThunkCreator, setUserInformationThunkCreator, profileSave}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} status={status} owner={owner}
                         updateUserStatusThunkCreator={updateUserStatusThunkCreator}
                         setAvatarThunkCreator={setAvatarThunkCreator} setUserInformationThunkCreator={setUserInformationThunkCreator} profileSave={profileSave}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;

