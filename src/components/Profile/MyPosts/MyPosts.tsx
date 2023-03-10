import React from "react";
import styles from './MyPosts.module.css'
import {PostsType, ProfilePageType} from "../../../redux/state";
import Post from "./Post/Post";
import {ProfilePagePropsType} from "../Profile";


function MyPosts(props: ProfilePagePropsType) {

    let newPostlement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostlement.current) {
            props.addPost(newPostlement.current.value)
        }
        newPostlement.current?.value == ""
    }


    let postListItems = props.posts.map((p) => <Post id={p.id} message={p.message} likes={p.likes}/>)

    return (
        <div className={styles.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostlement}> </textarea></div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postListItems}
            </div>
        </div>
    )
}

export default MyPosts
