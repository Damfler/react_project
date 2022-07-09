import React from "react";
import classes from './MyPosts.module.scss'
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <Posts message='Hi' />
                <Posts message='HEHE BOY' />
            </div>
        </div>
    )
}

export default MyPosts