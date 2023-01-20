import React from 'react';
import styles from "./Message.module.css";
import {MessageType} from "../../../redux/state";


const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

export default Message;