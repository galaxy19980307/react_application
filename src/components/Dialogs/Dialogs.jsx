import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Petr'},
        {id: 2, name: 'Valentina'},
        {id: 3, name: 'Mali'},
        {id: 4, name: 'Mum'}
    ]
    let MessagesData = [
        {message: 'Hello, i love you!'},
        {message: 'Hello, i love you too!'},
        {message: 'Hello, baby!'},
        {message: 'Hello!'}
    ]

    let dialogsElements = DialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = MessagesData
        .map(message => <MessageItem message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;
