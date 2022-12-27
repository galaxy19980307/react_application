import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messagesData
        .map(message => <MessageItem message={message.message}/>);

    let newMessageElement= React.createRef();

    const handleAddMessage = () => {
        props.addMessage();
    }

    const handleChangeMessage = () => {
        let newMessage = newMessageElement.current.value;  // получает значение(текст) из текстэрии
        props.updateNewMessageText(newMessage);
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
                        <textarea onChange={handleChangeMessage} ref={newMessageElement} value={props.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={handleAddMessage}>
                            Add message
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;
