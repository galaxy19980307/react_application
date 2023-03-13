import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {MessageReduxForm} from "./MessageForm";

const Dialogs = ({dialogsData, messagesData, addMessageActionCreator}) => {
    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messagesElements = messagesData.map(message => <MessageItem message={message.message} id={message.id}
                                                                    key={message.id}/>);


    const onAddMessage = (values) => {
        addMessageActionCreator(values.newMessageBody);
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
                <div><MessageReduxForm onSubmit={onAddMessage}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
