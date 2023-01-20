import React from 'react';
import styles from "./ProfileInfo.module.css";

type ProfileInfoType = {
    bg_img: string,
    avatar_img: string
}


const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.profileInfo_bg}>
                <img src={props.bg_img}></img>
            </div>
            <div className={styles.ProfileBlock}>
                <div>
                    <img src={props.avatar_img}/>
                </div>

                <div>
                    ava+description
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;