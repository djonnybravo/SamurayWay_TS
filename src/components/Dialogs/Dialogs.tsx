import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


const Dialogs: React.FC<DialogsPageType> = (props) => {

    let dialogsElements = props.dialogs.map( (d) => <Dialog id={d.id} name={d.name}/>)

    let messageElements = props.messages.map( (message) =>  <Message id={message.id} message={message.message}/> )

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