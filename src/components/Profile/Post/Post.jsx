import React from 'react';
import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.Post}>
            <div className={s.post_header}>
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="img" />
                <p>UserName</p>
            </div>
            <div className={s.post_body}>
                <img src={props.image} />
            </div>
            <div className={s.post_footer}>
                <div className={s.like}>
                    <span>{props.likesCount}</span>
                </div>
                {props.comment}
            </div>
        </div>
    )
}

export default Post
