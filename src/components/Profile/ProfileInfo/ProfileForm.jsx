import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/userNull.png";

const ProfileForm = ({handleSubmit, profile, error, setAvatarThunkCreator, owner}) => {
    const contactsLinks = Object.entries(profile.contacts).map(([serviceLink, link]) => (
        <div>
            <b>{serviceLink}</b>:<Field placeholder={serviceLink}
                                        name={"contacts." + serviceLink}
                                        component={"input"} validate={[]}/>
        </div>
    ))
    const handleImageUpload = (event) => {
        if (event.target.files) {
            setAvatarThunkCreator(event.target.files[0])
        }
    }
    return (
        <form className={s.avatarDescription} onSubmit={handleSubmit}>
            <div>
                <button onClick={handleSubmit}>Save</button>
            </div>
            <img src={profile.photos?.large != null ? profile?.photos.large : userPhoto}
                 alt='Нет фото'/>
            <div> {owner ? <input type={"file"} onChange={handleImageUpload}/> : null} </div>
            <div className={s.fullName}>
                <b>Name</b>: <Field placeholder={'Full Name'} name={"fullName"} component={"input"}
                                    validate={[]}/>
            </div>
            <div>
                <b>Looking for a job</b>:<Field type={"checkbox"} name={"lookingForAJob"} component={"input"}
                                                validate={[]}/>
            </div>
            <div>
                <b>Professional skills</b>: <Field placeholder={'Your skills'}
                                                   name={"lookingForAJobDescription"}
                                                   component={"textarea"} validate={[]}/>
            </div>
            <div>
                <b>Social Networks</b>:

                <div className={s.socialNetworks}>
                    {contactsLinks}
                </div>
            </div>
            <div>
                <b>About me</b>: <Field placeholder={'About Me'} name={"aboutMe"}
                                        component={"textarea"}/>
            </div>
            {error && <div className={s.error}>
                {error}
            </div>}
        </form>
    )
}

const ProfileReduxForm = reduxForm({form: 'profile'})(ProfileForm)

export default ProfileReduxForm;




