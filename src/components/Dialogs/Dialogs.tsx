import React from 'react';
import styles from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPageType, DialogType, MessageType} from "../../redux/state";


export type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (messageText: string) => void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map((d) => <Dialog id={d.id} name={d.name}/>)
    let messageElements = props.messages.map((message) => <Message id={message.id} message={message.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessageButton = () => {
       if (newMessageElement.current) {
           props.addMessage(newMessageElement.current.value)
       }

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
                    <button onClick={sendMessageButton}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;