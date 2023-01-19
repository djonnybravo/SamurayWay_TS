import React from "react";
import classes from "./Post.module.css";

type PostType = {
    message: string
    likes: number
}

function Post(props:PostType) {
    return (
        <div className={classes.item}>
            <img src='https://i.pinimg.com/originals/ff/83/e8/ff83e8559366b917c3d9a92640fdb804.png' />
            <span> {props.message} </span>
            <span>Likes: {props.likes}</span>
        </div>

    )
}

export default Post