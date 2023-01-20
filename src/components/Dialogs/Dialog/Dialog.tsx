import React from 'react';
import styles from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";


const Dialog: React.FC<DialogType> = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )



}



export default Dialog;