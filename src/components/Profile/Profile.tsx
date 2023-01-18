import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


function Profile() {

    return (
        <div className={classes.profile}>
            <div className={classes.bg}>
                <img
                    src='https://catherineasquithgallery.com/uploads/posts/2021-03/1614855297_173-p-foni-na-yutub-206.jpg'></img>
            </div>
            <div className={classes.av}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=122cd3b9add9207fe88f104c1534e7a5e88a97c1-5305509-images-thumbs&n=13&exp=1"
                    alt=""/>

            </div>
           <MyPosts/>
        </div>
    )
}

export default Profile