import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


const Dialogs: React.FC<DialogsPageType> = (props) => {

    let dialogsElements = props.dialogs.map((d) => <Dialog id={d.id} name={d.name}/>)
    let messageElements = props.messages.map((message) => <Message id={message.id} message={message.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessageButton = () => {
        let newMessageText = newMessageElement.current?.value
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea  ref={newMessageElement}></textarea>
                    <button onClick={sendMessageButton}></button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;