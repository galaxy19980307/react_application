import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='phone.png'/>
            </div>
            <div className={s.item}>
                Avatar + Description
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;
