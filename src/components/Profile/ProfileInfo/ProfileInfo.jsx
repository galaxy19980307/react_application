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
    const handleImageUpload = (event) => {
        if (event.target.files) {
            props.setAvatarThunkCreator(event.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.setUserInformationThunkCreator(formData).then(()=>{
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
            {!editMode &&
                <div className={s.avatarDescription}>
                    <div>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                    <img src={props.profile.photos?.large != null ? props.profile?.photos.large : userPhoto}
                         alt='Нет фото'/>
                    <div> {props.owner ? <input type={"file"} onChange={handleImageUpload}/> : null} </div>
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
                    <ProfileStatusWithHooks status={props.status}
                                            updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
                </div>}
            {editMode &&
                <ProfileForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}
                />}
        </div>
    )
}

export default ProfileInfo;
