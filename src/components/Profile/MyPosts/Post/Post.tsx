import React from "react";
import classes from "./Post.module.css";


function Post() {
    return (
        <div className={classes.item}>
            <img src='https://i.pinimg.com/originals/ff/83/e8/ff83e8559366b917c3d9a92640fdb804.png' />
            HELLO I AM A POST
        </div>

    )
}

export default Post