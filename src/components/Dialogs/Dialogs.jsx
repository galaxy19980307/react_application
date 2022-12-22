import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messagesData
        .map(message => <MessageItem message={message.message}/>);

    let newMessage= React.createRef();

    let addMessage= () => {
        let message= newMessage.current.value;
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
                <div>
                    <div>
                        <textarea ref={newMessage}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>
                            Add message
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;
