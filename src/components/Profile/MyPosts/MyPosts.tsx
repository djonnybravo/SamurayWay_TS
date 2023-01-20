import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {

    let posts = [
        {id: 1, message: "Hey, hello, how are you", likes: 10},
        {id: 2, message: "hello, i am good, and you", likes: 10},
        {id: 3, message: "I am good too, thanks", likes: 10},
        {id: 4, message: "This is great", likes: 10},
           ]

    let postlist = posts.map((p) =>  <Post id={p.id} message={p.message} likes={p.likes}/> )

    return (
        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postlist}
            </div>
        </div>
    )
}

export default MyPosts
