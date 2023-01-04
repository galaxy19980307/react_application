import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messagesData
        .map(message => <MessageItem message={message.message}/>);

    let newMessageElement = React.createRef();

    const handleAddMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    const handleChangeMessage = () => {
        debugger;
        let newMessage = newMessageElement.current.value;  // получает значение(текст) из текстэрии
        let action = updateNewMessageTextActionCreator(newMessage);
        props.dispatch(action);
    }
    console.log(props)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messagesItems}>
                    {messagesElements}
                </div>
                <div> <textarea placeholder={'Enter new message'} onChange={handleChangeMessage} ref={newMessageElement}
                                value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={handleAddMessage}>
                        Add message
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
