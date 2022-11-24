import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-romantic-beauty-beautiful-background-gradient-background-blue-background-image_20387.jpg'/>
            </div>
            <div className={s.item}>
                Avatar + Description
            </div>
            <div className={s.item}>
                My posts
                <div className={s.item}>
                    New post
                </div>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
}
export default Profile;
