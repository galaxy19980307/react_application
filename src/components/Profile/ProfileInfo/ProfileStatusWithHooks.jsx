import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {
    const [statusEdit, setStatusEdit] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
            setStatus(props.status)
        },
        [props.status]
    )

    const handleDoubleClick = () => {
        setStatusEdit(true)
    }

    const handleBlur = () => {
        setStatusEdit(false)
        props.updateUserStatusThunkCreator(status)
    }
    const onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!statusEdit &&
                <div>
                    <button onDoubleClick={handleDoubleClick}>{props.status || "Hello"} </button>
                </div>}
            {statusEdit &&
                <div>
                    <input onChange={onStatusChanged} className={s.button} autoFocus={true}
                           onBlur={handleBlur} value={status}/>
                </div>}
        </div>
    )

}
export default ProfileStatusWithHooks;
