import React from "react";
import styles from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";


export type PostsType = {
    posts: Array<PostType>
}


function MyPosts(props: PostsType) {






    let postListItems = props.posts.map((p) =>  <Post id={p.id} message={p.message} likes={p.likes}/> )

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
                {postListItems}
            </div>
        </div>
    )
}

export default MyPosts
