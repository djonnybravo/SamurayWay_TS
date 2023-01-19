import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts () {
    return (
        <div className={s.posts}>

            <Post message={'Hey, hello, how are you'} likes={10}/>
            <Post message={' hello, i am good, and you'} likes={10}/>
            <Post message={'I am good too, thanks'} likes={10}/>
            <Post message={'This is great'} likes={10}/>
            <Post message={'HELLO DASHA'} likes={100000}/>
        </div>
    )
}

export default MyPosts
