import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Petr
                </div>
                <div className={s.dialog}>
                    Valentina
                </div>
            </div>
            <div className={s.messagesItems}>
                <div className={s.message}>
                    Hello, i love you!
                </div>
                <div className={s.message}>
                    Hello, i love you too!
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
