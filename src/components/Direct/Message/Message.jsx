import React from 'react'
import s from '../Direct.module.css'
function Message(props) {
    return (
        <div className={s.Message}>
            {props.message}
        </div>
    )
}

export default Message;