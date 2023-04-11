import React, {useEffect, useState} from "react";
import s from "./ProfileStatusWithHooks.module.css"

const ProfileStatusWithHooks = (props) => {
    const [statusEdit, setStatusEdit] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
            setStatus(props.status)
        },
        [props.status]
    )
    const handleDoubleClick = () => {
        props.owner &&
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
            <b className={s.statusName} onDoubleClick={handleDoubleClick}>Status:</b>
            <div>
            {!statusEdit &&
                <button className={s.statusButton} onDoubleClick={handleDoubleClick}>{props.status || "Hello"} </button>
            }
            {statusEdit &&
                <div>
                    <input onChange={onStatusChanged} className={s.button} autoFocus={true}
                           onBlur={handleBlur} value={status}/>
                </div>}
        </div>
        </div>
    )

}
export default ProfileStatusWithHooks;
