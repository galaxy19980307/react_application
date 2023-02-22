import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";
import {textarea} from "../Utils/FormControl/FormControl";
import {maxLength30, required} from "../Utils/ValidationField";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messagesElements = props.dialogsPage.messagesData
        .map(message => <MessageItem message={message.message} id={message.id} key={message.id}/>);


    const MessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field label={'Enter your message'} name={"newMessageBody"} component={textarea}
                           validate={[required, maxLength30]}/>
                </div>
                <button>Send</button>
            </form>
        )
    }
    const MessageReduxForm = reduxForm({form: 'DialogAddMessage'})(MessageForm)
    const onAddMessage = (values) => {
        props.handleAddMessage(values.newMessageBody);
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
