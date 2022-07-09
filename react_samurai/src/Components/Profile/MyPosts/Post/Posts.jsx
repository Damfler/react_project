import React from "react";
import classes from './Posts.module.scss'

const Posts = (props) => {
    return (
        <div className={classes.item}>
            {props.message}
        </div>
    )
}

export default Posts