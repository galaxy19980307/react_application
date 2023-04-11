import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userNull.png";
import ProfileForm from "./ProfileForm";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);

    const handleEdit = () => {
        setEditMode(true)
    }

    const onSubmit = (formData) => {
        props.setUserInformationThunkCreator(formData).then(() => {
            setEditMode(false)
        })
    }
    const contactsFiltered = Object.entries(props.profile.contacts)
        .filter(([_, link]) => link)
        .map(([serviceLink, link]) => (
            <div>
                <b>{serviceLink}</b>: {link}
            </div>
        ))

    return (
        <div className={s.profileDescription}>
            <ProfileStatusWithHooks status={props.status}
                                    updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
                                    owner={props.owner}/>
            {!editMode &&
                <div className={s.avatarDescription}>
                    <div>
                        {props.owner &&
                            <button onClick={handleEdit}>Edit</button>}
                    </div>
                    <img src={props.profile.photos?.large != null ? props.profile?.photos.large : userPhoto}
                         alt='Нет фото'/>
                    <div className={s.fullName}>
                        <b>Name</b>: {props.profile.fullName ? props.profile.fullName : null}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'Yes' : 'No'}
                    </div>
                    <div>
                        {props.profile.lookingForAJob &&
                            <span> <b>Professional skills</b> : {props.profile.lookingForAJobDescription} </span>}
                    </div>
                    <div>
                        <b>Social Networks</b>: {contactsFiltered}
                    </div>
                    <div>
                        <b>About me</b>: {props.profile.aboutMe ? props.profile.aboutMe : null}
                    </div>

                </div>}
            {editMode &&
                <ProfileForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}
                             setAvatarThunkCreator={props.setAvatarThunkCreator} owner={props.owner}
                />}
        </div>
    )
}

export default ProfileInfo;
