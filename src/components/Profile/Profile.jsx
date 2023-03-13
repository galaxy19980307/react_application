import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";


const Profile = ({profile, status, updateUserStatusThunkCreator}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} status={status}
                         updateUserStatusThunkCreator={updateUserStatusThunkCreator}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;
