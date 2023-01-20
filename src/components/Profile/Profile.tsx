import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile() {

    return (
        <div className={styles.profile}>
            <ProfileInfo
                bg_img={'https://catherineasquithgallery.com/uploads/posts/2021-03/1614855297_173-p-foni-na-yutub-206.jpg'}
                avatar_img={'https://avatars.mds.yandex.net/i?id=122cd3b9add9207fe88f104c1534e7a5e88a97c1-5305509-images-thumbs&n=13&exp=1'}
            />
            <MyPosts/>
        </div>
    )
}

export default Profile