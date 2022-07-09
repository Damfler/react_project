import React from "react";
import classes from './profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://pbs.twimg.com/profile_banners/1058491234250121216/1548441924/1500x500" alt="" style={{'width': '100%'}}/>
            </div>
            <div>
                <img src="https://www.go-fit.ru/assets/images/persons/img/non-user.jpg" alt="" style={{'width': '20%'}}/>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile