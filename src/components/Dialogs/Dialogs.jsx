import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let DialogsData= [
        { id:1,name:'Petr'},
        { id:2,name:'Valentina'},
        { id:3,name:'Mali'},
        { id:4,name:'Mum'}
    ]

    let MessagesData= [
        {message:'Hello, i love you!'},
        {message:'Hello, i love you too!'},
        {message:'Hello, baby!'},
        {message:'Hello!'}
        ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
            </div>
            <div className={s.messagesItems}>
                <MessageItem message={MessagesData[0].message}/>
                <MessageItem message={MessagesData[1].message}/>
                <MessageItem message={MessagesData[2].message}/>
                <MessageItem message={MessagesData[3].message}/>
            </div>
        </div>
    )
}
export default Dialogs;
