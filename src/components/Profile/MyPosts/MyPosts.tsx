import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts () {
    return (
        <div className={classes.posts}>

            <Post/> <Post/> <Post/> <Post/>

        </div>
    )
}

export default MyPosts
