import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number,
    name: string,
}

type MessageType = {
    id: number,
    message: string
}



const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props: MessageType) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    const dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ]

    let dialogsElements = dialogs.map( (d) => <DialogItem id={d.id} name={d.name}/>)

    const messages = [
        {id: 1, message: "Hey"},
        {id: 2, message: "HELLO"},
        {id: 3, message: "YO"},
        {id: 4, message: "YO"},
    ]
    let messageElements = messages.map( (message) =>  <Message id={message.id} message={message.message}/> )

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;