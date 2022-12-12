import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    let postsData= [
        {message:'Hi everybody!', likeQuantity:6},
        {message:'Are you here?', likeQuantity:3},
        {message:'Nobody love me!', likeQuantity:0}
        ]
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}
export default Profile;
