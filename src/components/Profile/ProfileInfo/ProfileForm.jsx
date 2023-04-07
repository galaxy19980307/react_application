import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";

const ProfileForm = ({handleSubmit, profile, error}) => {
    const contactsLinks = Object.entries(profile.contacts).map(([serviceLink, link]) => (
        <div>
            <b>{serviceLink}</b>:<Field placeholder={serviceLink}
                                        name={"contacts."+serviceLink}
                                        component={"input"} validate={[]}/>
        </div>
    ))
    return (
        <form className={s.avatarDescription} onSubmit={handleSubmit}>
            <div>
                <button onClick={handleSubmit}>Save</button>
            </div>
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




