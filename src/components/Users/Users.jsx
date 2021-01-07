import React from 'react';
import style from './Users.module.css'

const Users = (props) => {

    const User = (props) => {
        return(
            <div className={style.user}>
                <div className={style.avaBlock}>
                    <img src={props.img}/>
                </div>
                <div className={style.desc}>
                    <h3>{props.name}</h3>
                    <p>{props.followed ? 'UNFOLLOW' : 'FOLLOW'}</p>
                </div>
            </div>
        )
    }
    let userElements = props.users.map( u => <User name={u.name} img={u.photo} id={u.id} followed={u.followed} key={u.key} />)
    return (
        <div>
            {userElements}
        </div>
    )
}

export default Users;