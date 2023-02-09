import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messagesElements = props.dialogsPage.messagesData
        .map(message => <MessageItem message={message.message} id={message.id} key={message.id}/>);

    let newMessageElement = React.createRef();


    const onAddMessage = () => {
        props.handleAddMessage();
    }

    const onChangeMessage = () => {
        let newMessage = newMessageElement.current.value;  // получает значение(текст) из текстэрии
        props.handleChangeMessage(newMessage);
    }
    if (!props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messagesItems}>
                    {messagesElements}
                </div>
                <div> <textarea placeholder={'Enter new message'} onChange={onChangeMessage} ref={newMessageElement}
                                value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>
                        Add message
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
